import listRepositories from '../../../api/repositories/list';

export const SET_REPOSITORIES = 'SET_REPOSITORIES';
export const setRepositories = (repositories) => ({
    type: SET_REPOSITORIES,
    payload: repositories,
});

export const loadRepositories = () => async (dispatch) => {
    try {
        const res = await listRepositories();
        dispatch(setRepositories(res));
    } catch (ex) {
        dispatch(setRepositories([]));
    }
};
