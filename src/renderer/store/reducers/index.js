import { combineReducers } from 'redux';
import repositories from './repositories/reducer';
import repositoryStatus from './repository-status/reducer';
import repositoryBranches from './repository-branches/reducer';
import repositoryChanges from './repository-changes/reducer';
import selections from './selections/reducer';

const rootReducer = combineReducers({
    repositories,
    repositoryStatus,
    repositoryBranches,
    repositoryChanges,
    selections,
});

export default rootReducer;
