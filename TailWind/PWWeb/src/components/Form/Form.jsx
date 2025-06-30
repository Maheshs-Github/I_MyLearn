import React from "react";

const Form = () => {
  return (
    <div className="m-auto flex flex-col justify-evenly items-center border-2 w-[28%] my-[20vh]">
      <h1>Login Form</h1>
      <input
        type="text"
        placeholder="Name"
        name="Name"
        className="border-1 rounded-sm"
      />
      <input
        type="text"
        placeholder="Email"
        name="Email"
        className="border-1 rounded-sm"
      />
      <button>Submit</button>
    </div>
  );
};

export default Form;
