import RepositoryManager from '../../../utils/repositories/RepositoryManager';

export default async function pull(ctx) {
    const repositoryManager = RepositoryManager.Instance();

    const repository = await repositoryManager.getRepositoryById(ctx.params.repositoryId);
    if (!repository) {
        ctx.status = 404;
        return;
    }

    let pullResponse;
    if (ctx.request.body?.remote && ctx.request.body?.branch) {
        const { remote, branch } = ctx.request.body;
        pullResponse = await repository.pull(remote, branch);
    } else {
        pullResponse = await repository.pull();
    }

    ctx.body = {
        changes: pullResponse.summary.changes,
    };
    ctx.status = 200;
}
