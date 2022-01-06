import React from "react";

class Practice extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
      count: 0,
    };

    this.btnClicked = this.btnClicked.bind(this);
  }

  btnClicked = () => {
    // this.setState({ count: this.state.count + 1 });

    //or better one is the prev state

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div className="practice-items">
        <h1>{this.state.count} </h1>
        <button onClick={this.btnClicked}>Button</button>
      </div>
    );
  }
}

export default Practice;
