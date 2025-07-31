import React, { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
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
    } else if (!/\w\S{8,}$/.test(formData.Password.trim())) {
      newErrors.Password1 =
        "Password Should have: 8+ Char(Words,Digits,Special Char(_))";
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
        <div className=" flex flex-col justify-between items-center w-[30%] gap-[50px] border-2 p-[20px] mx-auto my-[10vh]">
          <div className="w-[90%] ">
            <input
              type="text"
              value={formData.Name}
              name="Name"
              onChange={handleInput}
              placeholder="Enter the Name"
              className="  border-2 rounded-md p-[10px] w-[100%]"
            />
            {errors.Name && (
              <p className=" text-red-600 mt-1 ">{errors.Name}</p>
            )}
          </div>
          <div className="w-[90%]">
            <input
              type="password"
              value={formData.Password}
              name="Password"
              onChange={handleInput}
              placeholder="Enter the Password"
              className="border-2 rounded-md p-[10px] w-[100%]"
            />
            {errors.Password && (
              <p className=" text-red-600 mt-1">{errors.Password}</p>
            )}
            {errors.Password1 && (
              <p className=" text-red-600 mt-1 text-sm">{errors.Password1}</p>
            )}
          </div>
          <button className="border-2 rounded-md align-middle w-[50%] p-[5px]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
