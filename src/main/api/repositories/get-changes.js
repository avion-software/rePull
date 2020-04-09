import RepositoryManager from '../../utils/repositories/RepositoryManager';

export default async function getRepositoryChanges(ctx) {
    const repositoryManager = RepositoryManager.Instance();

    const repository = await repositoryManager.getRepositoryById(ctx.params.repositoryId);
    if (!repository) {
        ctx.status = 404;
        return;
    }

    const changes = await repository.getChanges();

    ctx.body = changes;
    ctx.status = 200;
}
