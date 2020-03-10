import RepositoryManager from '../../utils/repositories/RepositoryManager';

export default async function listRepositories(ctx) {
    const repositoryManager = RepositoryManager.Instance();

    await repositoryManager.reload();
    ctx.body = (await repositoryManager.getRepositories()).map(repo => repo.toJSON());
    ctx.status = 200;
}