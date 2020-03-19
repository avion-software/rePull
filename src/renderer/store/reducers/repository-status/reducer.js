import { produce } from 'immer';
import { SET_REPOSITORY_STATUS } from './actions';

const initialState = {
    values: {},
};

const repositoryStatus = (baseState = initialState, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case SET_REPOSITORY_STATUS:
            draftState.values[action.payload.id] = action.payload.value;
            break;
        default:
            break;
    }
});

export default repositoryStatus;
