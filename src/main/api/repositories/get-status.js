import RepositoryManager from '../../utils/repositories/RepositoryManager';

export default async function getRepositoryStatus(ctx) {
    const repositoryManager = RepositoryManager.Instance();

    const repository = await repositoryManager.getRepositoryById(ctx.params.repositoryId);
    if (!repository) {
        ctx.status = 404;
        return;
    }

    const status = await repository.status();

    ctx.body = {
        ahead: status.ahead,
        behind: status.behind,
        changes: status.files.length,
        currentBranch: status.current,
        trackingBranch: status.tracking,
    };
    ctx.status = 200;
}
