import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

class Layout1 extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout1;
