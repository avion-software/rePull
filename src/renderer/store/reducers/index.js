import { combineReducers } from 'redux';
import repositories from './repositories/reducer';
import selections from './selections/reducer';

const rootReducer = combineReducers({
    repositories,
    selections,
});

export default rootReducer;