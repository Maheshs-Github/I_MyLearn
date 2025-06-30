import React, { useReducer } from "react";
import ContextM from "./ContextM";

const reducerFun = (allTasks, action) => {
  let Tasks = allTasks;
  if (action.type === "ADD_TASK") {
    Tasks = [
      ...allTasks,
      {
        Name: action.payload.TName,
        Desc: action.payload.TDesc,
      },
    ];
    // for (const T1 of Tasks) {
    //   console.log(`Name: ${T1.Name}  & Description: ${T1.Desc}`);
    // }
    // for (const T1 of Tasks) {
    //   console.log("Task is:", JSON.stringify(T1, null, 2));
    // }
  }
  else if(action.type === "DELETE_TASK")
  {
    Tasks=allTasks.filter((T1)=>
    {
      return (T1.Name !== action.payload.TaskId)
    })
  }
  return Tasks;
};
const ContextStoreProv = ({ children }) => {
  const Task = [
    { Name: "Learning About Context", Desc: "Why do we even need one" },
    { Name: "Checking the ......", Desc: "Why do we even need one 2" },
  ];
  const [NewTask, dispatchNewTask] = useReducer(reducerFun, Task);
  const addTask = (TName, TDesc) => {
    const dispatchAdd = {
      type: "ADD_TASK",
      payload: {
        TName,
        TDesc,
      },
    };
    dispatchNewTask(dispatchAdd);
  };
  const removeTask=(TaskId)=>
  {
    dispatchNewTask(
      {
        type:"DELETE_TASK",
        payload:
        {
          TaskId
        }
      }
    )
  }
  return (
    <ContextM.Provider value={{ removeTask,addTask, NewTask }}>
      {children}
    </ContextM.Provider>
  );
};

export default ContextStoreProv;
