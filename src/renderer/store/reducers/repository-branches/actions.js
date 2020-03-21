import getRepositoryBranches from '../../../api/repository/branches';

export const SET_REPOSITORY_BRANCHES = 'SET_REPOSITORY_BRANCHES';
export const setRepositoryBranches = (repositoryId, repositoryBranches) => ({
    type: SET_REPOSITORY_BRANCHES,
    payload: {
        id: repositoryId,
        value: repositoryBranches,
    },
});

export const loadRepositoryBranches = (repository) => async (dispatch) => {
    try {
        const res = await getRepositoryBranches(repository);

        if (res) {
            dispatch(setRepositoryBranches(repository.id, res));
        }
    } catch (ex) {
        // TODO: Add logging
    }
};
