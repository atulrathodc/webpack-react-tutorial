import React from 'react'
import PropTypes from 'prop-types';
//import AddTodo from '../containers/AddTodo'
//import { combineForms } from 'react-redux-form';
import Greeting from './Greeting'
import Block from './block'
import BlockPanel from './blockPanel'
import Accord from '../containers/accord';
import css from '../index.css';

const App = () => (
  <div>
    {/*<AddTodo />*/}
    <Greeting name={[7] }   ><input/></Greeting >
<Accord dd={2}/>

 


  </div>
)

export default App