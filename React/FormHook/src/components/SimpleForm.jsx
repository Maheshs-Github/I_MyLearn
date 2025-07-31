import React, { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Password: "",
  });
  const handleInput = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    // we can also take the values separately
    // console.log("Event:", e);
    const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    // setFormData((Data) => {
    //   return { ...Data, [name]: value };
    // });
    setFormData((Data) => ({ ...Data, [name]: value }));
  };

  const handleFormData = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };
  // const handleSubmit = () => {
  //   console.log("Form Data 1: ", formData);
  // };
  return (
    <div>
      {/* <form onSubmit={(e) => handleFormData(e)}> */}
      <form onSubmit={handleFormData}>
        {/* <div className="grid grid-cols-1 w-[20%] gap-[50px] border-2 p-[20px]"> */}
        <div className="flex flex-col justify-between items-center w-[30%] gap-[50px] border-2 p-[20px] mx-auto my-[10vh]">
          {/* <div>Hello There</div> */}
          <input
            type="text"
            value={formData.Name}
            name="Name"
            // onChange={(e) => handleInput(e)}
            onChange={handleInput}
            // onChange={(e) => handleFormData(e)}
            placeholder="Enter the Name"
            className="border-2 rounded-md p-[10px] w-[90%] placeholder:text-red-700 placeholder:leading-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="password"
            value={formData.Password}
            name="Password"
            // onChange={(e) => handleInput(e)}
            onChange={handleInput}
            // onChange={(e) => handleFormData(e)}
            placeholder="Enter the Password"
            className="border-2 rounded-md p-[10px] w-[90%]"
          />
          <button
            className="border-2 rounded-md align-middle w-[50%] p-[5px]"
            // onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
