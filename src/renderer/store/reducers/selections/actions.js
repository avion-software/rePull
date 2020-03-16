export const SET_ACTIVE_REPOSITORY = 'SET_ACTIVE_REPOSITORY';
export const setActiveRepository = (repositoryId) => ({
    type: SET_ACTIVE_REPOSITORY,
    payload: repositoryId,
});
