import getRepositoryChanges from '../../../api/repository/changes';

export const SET_REPOSITORY_CHANGES = 'SET_REPOSITORY_CHANGES';
export const setRepositoryChanges = (repositoryId, repositoryChanges) => ({
    type: SET_REPOSITORY_CHANGES,
    payload: {
        id: repositoryId,
        value: repositoryChanges,
    },
});

export const loadRepositoryChanges = (repository) => async (dispatch) => {
    try {
        const res = await getRepositoryChanges(repository);

        if (res) {
            dispatch(setRepositoryChanges(repository.id, res));
        }
    } catch (ex) {
        // TODO: Add logging
    }
};
