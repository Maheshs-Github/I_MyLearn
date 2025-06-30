import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      {/* <h1>Hello There</h1> */}
      <AddTodo></AddTodo>
      <Todos></Todos>
    </div>
  );
};

export default App;
