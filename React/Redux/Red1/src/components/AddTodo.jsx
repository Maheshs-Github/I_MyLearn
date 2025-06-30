import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { addTodo } from "../features/ToDo/todoSlice";

const AddTodo = () => {
  // const [Show, setShow] = useState(false);
  const [ShowAdd, setShowAdd] = useState(false);
  const Todo = useRef();
  const Dispatch = useDispatch();
  const getData = () => {
    const ToDoValue = Todo.current.value;
    Dispatch(addTodo(ToDoValue));
    Todo.current.value = "";
  };
  return (
    <div className="Base">
      {/* <h1>Hello There</h1> */}
      <button
        className="B1"
        onClick={() => {
          // console.log("button Clicked 1");
          setShowAdd(true);
        }}
      >
        Add
      </button>
      {/* <button
        className="B2"
        onClick={() => {
          setShow(true);
        }}
      >
        Show Data 
      </button> */}

      {ShowAdd && (
        <div className="FormBase">
          <input type="text" ref={Todo} />
          {/* <input type="text" ref={TDesc} /> */}
          <button
            className="B1"
            onClick={() => {
              setShowAdd(false);
              getData();
            }}
          >
            Now Add
          </button>
        </div>
      )}
      {/* {Show && <ShowData />} */}
    </div>
  );
};

export default AddTodo;
