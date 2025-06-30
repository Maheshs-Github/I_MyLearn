import React, { useContext } from "react";
import "../App.css";
import ContextM from "../store/ContextM";

const ShowData = () => {
  const { NewTask, removeTask } = useContext(ContextM);

  return (
    <div>
      <div className="Output">
        {NewTask.map((Data, index) => {
          return (
            <div className="Ans" key={index}>
              <h2>
                Name: {Data.Name} <br></br>Description: {Data.Desc}
              </h2>
              <button className="B2" onClick={() => removeTask(Data.Name)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowData;
