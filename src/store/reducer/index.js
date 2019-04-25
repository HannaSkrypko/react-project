import { combineReducers } from 'redux';

import enterReducer from './enterReducer';
import catalogReducer from './catalogReducer';

const rootReducer = combineReducers({
    user: enterReducer,
    catalog: catalogReducer,
});

export default rootReducer;