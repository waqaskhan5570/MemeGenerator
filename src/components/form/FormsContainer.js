import React, { Component } from "react";
import FormsComponent from "./FormsComponent";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",

      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <div>
        <FormsComponent handleChange={this.handleChange} data={this.state} />
      </div>
    );
  }
}

export default Forms;
