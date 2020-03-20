import { produce } from 'immer';
import { SET_ACTIVE_REPOSITORY, SET_SHOW_OVERLAY } from './actions';

const initialState = {
    activeRepository: [],
    showActionOverlay: false,
};

const selections = (baseState = initialState, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case SET_ACTIVE_REPOSITORY:
            draftState.activeRepository = action.payload;
            break;
        case SET_SHOW_OVERLAY:
            draftState.showActionOverlay = !!action.payload;
            break;
        default:
            break;
    }
});

export default selections;
