import { combineReducers } from 'redux'
import todos from './todos'
import accord from './accordreducer'
//import { combineForms } from 'react-redux-form';

const initialUser = {
  firstName: '', 
  lastName: '',
};

export default combineReducers({
  todos,
  accord

})