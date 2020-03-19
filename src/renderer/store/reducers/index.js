import { combineReducers } from 'redux';
import repositories from './repositories/reducer';
import repositoryStatus from './repository-status/reducer';
import selections from './selections/reducer';

const rootReducer = combineReducers({
    repositories,
    repositoryStatus,
    selections,
});

export default rootReducer;
