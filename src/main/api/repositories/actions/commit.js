import RepositoryManager from '../../../utils/repositories/RepositoryManager';

export default async function commit(ctx) {
    const repositoryManager = RepositoryManager.Instance();

    const repository = await repositoryManager.getRepositoryById(ctx.params.repositoryId);
    if (!repository) {
        ctx.status = 404;
        return;
    }

    if (!ctx.request.body?.message) {
        ctx.status = 400;
        return;
    }

    const commitResponse = await repository.commit(ctx.request.body.message, ctx.request.body.description);

    if (!commitResponse.summary.changes) {
        ctx.status = 204;
        return;
    }

    ctx.body = {
        shortHash: commitResponse.commit,
        branch: commitResponse.branch,
        changes: commitResponse.summary.changes,
    };
    ctx.status = 200;
}