import RepositoryManager from '../../../utils/repositories/RepositoryManager';

export default async function fetch(ctx) {
    const repositoryManager = RepositoryManager.Instance();

    const repository = await repositoryManager.getRepositoryById(ctx.params.repositoryId);
    if (!repository) {
        ctx.status = 404;
        return;
    }

    let fetchResponse;
    if (ctx.request.body?.remote && ctx.request.body?.branch) {
        const { remote, branch } = ctx.request.body;
        fetchResponse = await repository.fetch(remote, branch);
    } else {
        fetchResponse = await repository.fetch();
    }

    ctx.body = {
        remote: fetchResponse.remote,
        createdTags: fetchResponse.tags,
        createdBranches: fetchResponse.branches,
    };
    ctx.status = 200;
}