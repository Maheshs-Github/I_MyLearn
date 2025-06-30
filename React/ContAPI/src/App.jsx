import React, { useRef, useState } from "react";
import "./App.css";
import { useContext } from "react";
// import ContextStoreProv,  ContextM  from "./store/ContextStore";
import ContextM from "./store/ContextM";
import ShowData from "./components/ShowData";
// import ContextStoreProv from "./store/ContextStore";

const App = () => {
  const [ShowAdd, setShowAdd] = useState(false);
  const [Show, setShow] = useState(false);

  let TName = useRef();
  let TDesc = useRef();
  // let Data;
  const { addTask, NewTask } = useContext(ContextM);
  const getData = () => {
    // console.log("hello Theer");
    // console.log(`Name: ${TName.current.value}`);

    TName = TName.current.value;
    TDesc = TDesc.current.value;
      // addTask(TName, TDesc);
      addTask(TName, TDesc);
    // console.log("Data is ", Data);
  };

  // console.log(`So Add Button Value is: ${ShowAdd}`);

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
      <button
        className="B2"
        onClick={() => {
          setShow(true);
        }}
      >
        Show Data
      </button>

      {ShowAdd && (
        <div className="FormBase">
          <input type="text" ref={TName} />
          <input type="text" ref={TDesc} />
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
      {Show && <ShowData />}
    </div>
  );
};

export default App;
