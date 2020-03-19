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
        const { remote, branch, rebase } = ctx.request.body;
        pullResponse = await repository.pull(remote, branch, {
            rebase,
        });
    } else {
        const { rebase } = ctx.request.body;

        pullResponse = await repository.pull({
            rebase,
        });
    }

    ctx.body = {
        changes: pullResponse.summary.changes,
    };
    ctx.status = 200;
}
