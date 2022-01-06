import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };

    this.btnLogin = this.btnLogin.bind(this);
  }

  btnLogin = (isLoggedIn) => {
    let updatedLog;
    updatedLog = !this.state.isLoggedIn;

    this.setState({ isLoggedIn: updatedLog });
  };

  render() {
    let btntext = this.state.isLoggedIn ? "Log out" : "Log in";
    let logText = this.state.isLoggedIn ? "In" : "Out";
    return (
      <div>
        <p>You are Logged{logText}</p>
        <button onClick={this.btnLogin}>{btntext}</button>
      </div>
    );
  }
}

export default ConditionalRendering;
