import { combineReducers } from 'redux';
import {planReducer} from '../reducers/planReducer';
import {schoolReducer} from '../reducers/schoolReducer';

const rootReducer = combineReducers({
  plan: planReducer,     // planReducer handles 'plan' state
  school: schoolReducer, // schoolReducer handles 'school' state
});

export default rootReducer;
