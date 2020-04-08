import getRepositoryBranches from '../../../api/repository/branches';
import checkout from '../../../api/branch/checkout';
import { loadRepositoryStatus } from '../repository-status/actions';

export const SET_REPOSITORY_BRANCHES = 'SET_REPOSITORY_BRANCHES';
export const setRepositoryBranches = (repositoryId, repositoryBranches, local = true) => ({
    type: SET_REPOSITORY_BRANCHES,
    payload: {
        id: repositoryId,
        value: repositoryBranches,
        local,
    },
});

export const loadLocalRepositoryBranches = (repository) => async (dispatch) => {
    try {
        const res = await getRepositoryBranches(repository, false);

        if (res) {
            dispatch(setRepositoryBranches(repository.id, res, true));
        }
    } catch (ex) {
        // TODO: Add logging
    }
};

export const loadRemoteRepositoryBranches = (repository) => async (dispatch) => {
    try {
        const res = await getRepositoryBranches(repository, true);

        if (res) {
            dispatch(setRepositoryBranches(repository.id, res, false));
        }
    } catch (ex) {
        // TODO: Add logging
    }
};

export const loadRepositoryBranches = (repository) => async (dispatch) => {
    try {
        await Promise.all([
            dispatch(loadLocalRepositoryBranches(repository)),
            dispatch(loadRemoteRepositoryBranches(repository)),
        ]);
    } catch (ex) {
        // TODO: Add logging
    }
};

export const checkoutBranch = (repository, branch) => async (dispatch) => {
    try {
        const response = await checkout(repository, branch);
        dispatch(loadRepositoryBranches(repository));
        dispatch(loadRepositoryStatus(repository));
        return response;
    } catch (ex) {
        console.error(ex);
        // TODO: Add logging
        return null;
    }
};
