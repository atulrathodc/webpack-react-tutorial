import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducers'
//import { combineForms } from 'react-redux-form';
import App from './components/App'
 import thunk from 'redux-thunk';
 import BasicExample from './components/basicExample';
 import ParamsExample from './components/ParamsExample';
 import NoMatchExample from './components/NoMatchExample';
 import AuthExample from './components/AuthExample';

// const initialUserState = {
//   firstName: '',
//   lastName: '',   
// };


// const axios = require('axios');

// const middleware = [ thunk ]
// const store = createStore(combineForms({
//   user: initialUser
// }
// ,applyMiddleware(...middleware)
//   ));

const store = createStore(
rootReducer
, applyMiddleware(thunk));

// // axios.get('http://localhost:8081/spring4/api1')
// //   .then(function (response) {
// //     // handle success
// //     console.log(response);
// //   })
// //   .catch(function (error) {
// //     // handle error
// //     console.log(error);
// //   })
// //   .then(function () {
// //     console.log("final");
// //     // always executed
// //   });
// // function loadDoc() {
// //   var xhttp = new XMLHttpRequest();
// //   xhttp.onreadystatechange = function() {
// //     if (this.readyState == 4 && this.status == 200) {
   
// //       console.log(this.responseText);
// //     }
// //   };
// //   xhttp.open("GET", "http://localhost:8081/spring4/api1", true);
// //   xhttp.send();
// // }
// // loadDoc()
render(
  <Provider store={store}>
<App/>
  </Provider>,
  document.getElementById('root1')
)

// render(
 

// <AuthExample/>
//   ,
//   document.getElementById('root1')
// )
// let s=23;
// console.log(s)