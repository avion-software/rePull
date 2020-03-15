export const SET_REPOSITORIES = 'SET_REPOSITORIES';
export const setRepositories = (repositories) => ({
    type: SET_REPOSITORIES,
    value: repositories,
});

export const loadRepositories = ()  => async (dispatch) => {
    dispatch(setRepositories([]));
};
