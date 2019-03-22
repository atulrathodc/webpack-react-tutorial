import PropTypes from 'prop-types';
import React, { Component } from "react";
 class Greeting extends Component {
     
  render() {
         const children = this.props.children;
    return (
      <h1>Hello, {children}</h1>
    );
  }
}
Greeting.propTypes = {
  name: PropTypes.arrayOf(PropTypes.number),
    children: PropTypes.element.isRequired
};
export default Greeting ;