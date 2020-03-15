import { combineReducers } from 'redux';
import repositories from './repositories/reducer';

const rootReducer = combineReducers({
    repositories,
});

export default rootReducer;