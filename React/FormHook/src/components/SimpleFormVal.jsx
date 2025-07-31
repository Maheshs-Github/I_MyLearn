import React, { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    console.log("Event:", e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormData = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.Name.trim()) {
      newErrors.Name = "Hello, Name is Required u k";
    }
    if (!formData.Password.trim()) {
      newErrors.Password = "Hello Fella , Password is Required just so u k";
    }
    if (Object.keys(newErrors).length > 0) {
      console.log("Errors: ", newErrors);
      setErrors(newErrors);
      return;
    }
    console.log("Form Data: ", formData);
  };

  return (
    <div>
      <form onSubmit={handleFormData}>
        <div className=" relative flex flex-col justify-between items-center w-[30%] gap-[50px] border-2 p-[20px] mx-auto my-[10vh]">
          <input
            type="text"
            value={formData.Name}
            name="Name"
            onChange={handleInput}
            placeholder="Enter the Name"
            className="  border-2 rounded-md p-[10px] w-[90%]"
          />
          {errors.Name && (
            <p className="absolute top-[72px] left-[50px] text-red-600 ">
              {errors.Name}
            </p>
          )}
          <input
            type="password"
            value={formData.Password}
            name="Password"
            onChange={handleInput}
            placeholder="Enter the Password"
            className="border-2 rounded-md p-[10px] w-[90%]"
          />
          {errors.Password && (
            <p className="absolute top-[172px] left-[50px] text-red-600">
              {errors.Password}
            </p>
          )}
          <button className="border-2 rounded-md align-middle w-[50%] p-[5px]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
