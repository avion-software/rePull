import { produce } from 'immer';
import { SET_REPOSITORIES } from './actions';

const initialState = {
    values: [],
};

const repositories = (baseState = initialState, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case SET_REPOSITORIES:
            draftState.values = action.payload;
        default:
            break;
    }
});

export default repositories;
