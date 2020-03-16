import { produce } from 'immer';
import { SET_ACTIVE_REPOSITORY } from './actions';

const initialState = {
    activeRepository: [],
};

const selections = (baseState = initialState, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case SET_ACTIVE_REPOSITORY:
            draftState.activeRepository = action.payload;
        default:
            break;
    }
});

export default selections;
