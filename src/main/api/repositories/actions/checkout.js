import RepositoryManager from '../../../utils/repositories/RepositoryManager';
import CheckoutConflictError from '../../../utils/exceptions/git/CheckoutConflictError';

export default async function checkout(ctx) {
    const repositoryManager = RepositoryManager.Instance();

    const repository = await repositoryManager.getRepositoryById(ctx.params.repositoryId);
    if (!repository) {
        ctx.status = 404;
        return;
    }

    if (ctx.request.body?.remote !== false
        || !ctx.request.body?.branchId) {
        ctx.status = 400;
        return;
    }

    const { branchId } = ctx.request.body;
    const branch = await (await repository.getBranchManager()).getById(branchId);

    if (!branch) {
        ctx.status = 404;
        return;
    }

    try {
        const checkoutResponse = await branch.checkout();
        ctx.status = 200;
        ctx.body = checkoutResponse;
    } catch (ex) {
        if (ex instanceof CheckoutConflictError) {
            ctx.status = 409;
            ctx.body = {
                conflictFiles: ex.getFiles(),
            };
            return;
        }

        ctx.status = 500;
        return;
    }

    ctx.status = 200;
}
