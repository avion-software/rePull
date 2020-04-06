import getRepositoryBranches from '../../../api/repository/branches';

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
