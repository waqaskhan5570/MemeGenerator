import React from "react";

function Todo(props) {
  let completedItems = {
    textDecoration: "line-through",
    color: "darkgrey",
    fontStyle: "italic",
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.items.completed}
        onChange={() => props.handleChange(props.items.id)}
      />
      <p style={props.items.completed ? completedItems : null}>
        {props.items.text}
      </p>
    </div>
  );
}

export default Todo;

// react class componenet - statefull , return inside the render method

// import React, { Component } from "react";

// class Todo extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="todo-item">
//         <input
//           type="checkbox"
//           onChange={() => this.props.handleChange(this.props.items.id)}
//           checked={this.props.items.completed}
//         />
//         <p>{this.props.items.text}</p>
//       </div>
//     );
//   }
// }

// export default Todo;
