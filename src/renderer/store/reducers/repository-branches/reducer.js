import { produce } from 'immer';
import { SET_REPOSITORY_BRANCHES } from './actions';

const initialState = {
    values: {},
};

const repositoryBranches = (baseState = initialState, action) => produce(
    baseState,
    (draftState) => {
        switch (action.type) {
            case SET_REPOSITORY_BRANCHES:
                draftState.values[action.payload.id] = draftState.values[action.payload.id] || {};
                draftState.values[action.payload.id][action.payload.local ? 'local' : 'remotes'] = action.payload.value;
                break;
            default:
                break;
        }
    },
);

export default repositoryBranches;
