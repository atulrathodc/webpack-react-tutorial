import PropTypes from 'prop-types';
import React, { Component } from "react";
import Block from '../components/block'
 class ContainerBlock extends Component {
   constructor(props) {
    super(props);
     const accord_state=[];
        
    
 
     
  }




  
  render() {
      console.log("props",this.props)
  //const numbers = [1, 2, 3, 4, 5];
const listItems = this.props.number.map((v,number) =>
  <li key={number.toString()}>
    {v}
  </li>
);

const Items = this.props.mydata.map((value,key) =>
  {
  var ms=value.msg;
  return <Block key={key}> <button onClick={()=>{this.props.toggle(key)}}>
      toggle
  
      </button>
      
              {value.ad.open?ms:""}</Block>
  });
//   console.log(this.state)
    return (
      <div>
{listItems}

============

<button onClick={()=>{this.props.add1()} }> add </button>
{Items}
{/*===========================
{JSON.stringify(this.state)}*/}
      </div>
    );
  }
}

export default ContainerBlock ;