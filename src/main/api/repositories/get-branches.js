import RepositoryManager from '../../utils/repositories/RepositoryManager';
import parseBoolean from '../../utils/convert/parseBoolean';

export default async function getRepositoryBranches(ctx) {
    const repositoryManager = RepositoryManager.Instance();

    const repository = await repositoryManager.getRepositoryById(ctx.params.repositoryId);
    if (!repository) {
        ctx.status = 404;
        return;
    }

    const branches = parseBoolean(ctx.query?.remotes)
        ? await repository.remoteBranches()
        : await repository.localBranches();

    ctx.body = branches;
    ctx.status = 200;
}
