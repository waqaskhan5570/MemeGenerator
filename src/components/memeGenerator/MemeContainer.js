import React, { Component } from "react";
import MemeComponent from "./MemeComponent";

class MemeContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <MemeComponent name={this.state.name} />;
  }
}

export default MemeContainer;
