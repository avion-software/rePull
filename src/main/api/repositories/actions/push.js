import RepositoryManager from '../../../utils/repositories/RepositoryManager';

export default async function push(ctx) {
    const repositoryManager = RepositoryManager.Instance();

    const repository = await repositoryManager.getRepositoryById(ctx.params.repositoryId);
    if (!repository) {
        ctx.status = 404;
        return;
    }

    if (!ctx.request.body?.remote || !ctx.request.body?.branch) {
        ctx.status = 400;
        return;
    }

    const { remote, branch } = ctx.request.body;
    await repository.push(remote, branch);

    ctx.status = 204;
}