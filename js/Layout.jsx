import React, { Component } from "react";
import { string } from "prop-types";
import Header from "./Header";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.data = props.children;
  }
  render() {
    return (
      <div className="layout">
        <Header />
        {this.data}
      </div>
    );
  }
}

Layout.propTypes = {
  children: string.isRequired
}.isRequired;

export default Layout;
