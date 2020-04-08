import { combineReducers } from 'redux';
import repositories from './repositories/reducer';
import repositoryStatus from './repository-status/reducer';
import repositoryBranches from './repository-branches/reducer';
import selections from './selections/reducer';

const rootReducer = combineReducers({
    repositories,
    repositoryStatus,
    repositoryBranches,
    selections,
});

export default rootReducer;
