import { WINDOW_TITLE_PREFIX } from '../../../constants/app-constants';
import { loadRepositoryStatus } from '../repository-status/actions';

export const SET_ACTIVE_REPOSITORY = 'SET_ACTIVE_REPOSITORY';
const setActiveRepositoryAction = (repositoryId) => ({
    type: SET_ACTIVE_REPOSITORY,
    payload: repositoryId,
});

export const setActiveRepository = (repository) => (dispatch) => {
    dispatch(setActiveRepositoryAction(repository.id));
    window.document.title = `${WINDOW_TITLE_PREFIX}${repository.name}`;

    dispatch(loadRepositoryStatus(repository));
};
