import { WINDOW_TITLE_PREFIX } from '../../../constants/app-constants';
import { loadRepositoryStatus } from '../repository-status/actions';
import { loadRepositoryBranches } from '../repository-branches/actions';
import { loadRepositoryChanges } from '../repository-changes/actions';

export const SET_ACTIVE_REPOSITORY = 'SET_ACTIVE_REPOSITORY';
const setActiveRepositoryAction = (repositoryId) => ({
    type: SET_ACTIVE_REPOSITORY,
    payload: repositoryId,
});

export const SET_SHOW_OVERLAY = 'SET_SHOW_OVERLAY';
export const setShowActionOverlay = (showOverlay) => ({
    type: SET_SHOW_OVERLAY,
    payload: showOverlay,
});

export const setActiveRepository = (repository) => (dispatch) => {
    dispatch(setActiveRepositoryAction(repository.id));
    window.document.title = `${WINDOW_TITLE_PREFIX}${repository.name}`;

    dispatch(loadRepositoryStatus(repository));
    dispatch(loadRepositoryBranches(repository));
    dispatch(loadRepositoryChanges(repository));
};
