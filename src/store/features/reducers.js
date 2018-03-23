import { combineReducers } from 'redux';
import clickCounter from './clickCounter/reducers';
import updateCompany from './updateCompany/reducer';

const rootReducer = combineReducers({
  clickCounter,
  companies: updateCompany
});
export default rootReducer;