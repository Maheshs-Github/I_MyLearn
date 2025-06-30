import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/ToDo/todoSlice";

const Todos = () => {
  const Todos = useSelector((state) => state.Todo.todos);
  const Dispatch = useDispatch();
  return (
    <div>
      <div className="Output">
        {Todos.map((Data) => {
          return (
            <div className="Ans" key={Data.id}>
              <h2>
                TODO: {Data.text} <br></br>
              </h2>
              <button
                className="B2"
                onClick={() => Dispatch(removeTodo(Data.id))}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
