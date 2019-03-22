import PropTypes from 'prop-types';
import React, { Component } from "react";
import BlockPanel from '../components/blockpanel'
 class Block extends Component {
     
  render() {
     const children = this.props.children; 
    return (
      <div>
          <BlockPanel >
             {children} 
          </BlockPanel >
      </div>
    );
  }
}

export default Block ;