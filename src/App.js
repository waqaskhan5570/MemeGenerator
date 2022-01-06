import "./App.css";
import React from "react";
// import Todo from "./components/Todo";
import FormsContainer from "./components/form/FormsContainer";
// import Practice from "./components/Practice";
// import Products from "./components/products.json";
import TodoItems from "./components/todoItems.json";
// import ConditionalRendering from "./components/ConditionalRendering";
import MemeContainer from "./components/memeGenerator/MemeContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoItems,
      isLoading: true,

      unReadMessages: ["A", "b"],
      character: {},
    };

    this.itemChanged = this.itemChanged.bind(this);
  }

  // componentDidMount() {
  //   fetch("https://swapi.dev/api/people/1/")
  //     .then((response) => response.json())
  //     .then((data) =>
  //       this.setState({
  //         isLoading: false,
  //         character: data,
  //       })
  //     );
  // }

  itemChanged = (id) => {
    let selectedItem = this.state.todos.find((item) => item.id === id);

    selectedItem.completed = !selectedItem.completed;

    let updatedItems = this.state.todos.map((item) => {
      if (item.id === id) {
        return selectedItem;
      } else {
        return item;
      }
    });

    this.setState({ todos: updatedItems });
  };

  render() {
    // let todolist = this.state.todos.map((item) => (
    //   <Todo key={item.id} items={item} handleChange={this.itemChanged} />
    // ));

    // let text = this.state.isLoading
    //   ? "Loading ...."
    //   : this.state.character.name +
    //     " is" +
    //     this.state.character.height +
    //     " cm tall .";
    return (
      <div>
        <MemeContainer />

        {/* <div className="todo-list">{todolist}</div> */}
      </div>
    );
  }
}

export default App;
