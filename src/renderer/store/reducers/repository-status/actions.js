import getRepositoryStatus from '../../../api/repository/status';

export const SET_REPOSITORY_STATUS = 'SET_REPOSITORY_STATUS';
export const setRepositoryStatus = (repositoryId, repositoryStatus) => ({
    type: SET_REPOSITORY_STATUS,
    payload: {
        id: repositoryId,
        value: repositoryStatus,
    },
});

export const loadRepositoryStatus = (repository)  => async (dispatch) => {
    try {
        const res = await getRepositoryStatus(repository);

        if (res) {
            dispatch(setRepositoryStatus(repository.id, res));
        }
    } catch (ex) {
    }
};
