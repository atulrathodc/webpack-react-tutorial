import React from 'react'

import AddTodo from '../containers/AddTodo'
import { combineForms } from 'react-redux-form';
import CheckboxWithLabel from './CheckboxWithLabel';

const App = () => (
  <div>
    <CheckboxWithLabel/>
    <AddTodo />

 


  </div>
)

export default App