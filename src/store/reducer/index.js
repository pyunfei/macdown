import { combineReducers } from 'redux';
import content from './initContent';
import navbar from './navbar';

const reducer = combineReducers({
  content,
  navbar
});
export default reducer;