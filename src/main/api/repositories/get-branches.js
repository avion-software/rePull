import RepositoryManager from '../../utils/repositories/RepositoryManager';

export default async function getRepositoryBranches(ctx) {
    const repositoryManager = RepositoryManager.Instance();

    const repository = await repositoryManager.getRepositoryById(ctx.params.repositoryId);
    if (!repository) {
        ctx.status = 404;
        return;
    }

    const branches = await repository.branches();

    ctx.body = branches;
    ctx.status = 200;
}
