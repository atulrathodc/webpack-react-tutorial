import PropTypes from 'prop-types';
import React, { Component } from "react";

 class BlockPanel extends Component {
     
  render() {
       const children = this.props.children;
    return (
      <div>BlockPanel
     
    {children}
      </div>
    );
  }
}

export default BlockPanel ;