import { produce } from 'immer';
import { SET_REPOSITORY_CHANGES } from './actions';

const initialState = {
    values: {},
};

const repositoryChanges = (baseState = initialState, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case SET_REPOSITORY_CHANGES:
            draftState.values[action.payload.id] = action.payload.value;
            break;
        default:
            break;
    }
});

export default repositoryChanges;
