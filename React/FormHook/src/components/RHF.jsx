import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // //Using fetch method to send the dat to backend
  // const onSubmit = async (data) => {
  //   console.log("Form Submitted ✅", data);
  //   try {
  //     const Data = await fetch("http://localhost:4000/Data", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const Data1 = await Data.json();
  //     if (Data1.success) {
  //       console.log(Data1.Data);
  //       window.alert(Data1.message);
  //       reset(); // Clear the form
  //     }
  //   } catch (err) {
  //     console.log("There is been some error: ", err);
  //   }
  // };

  //Using axios method to send the dat to backend
  const onSubmit = async (data) => {
    console.log("Form Submitted ✅", data);
    try {
      const Data1 = await axios.post("http://localhost:4000/Data", data);
      console.log("data: ", Data1);
      if (Data1.data.success) {
        console.log("Data: ", Data1.data.Data);
        // alert(Data1.data.message);
        toast.success("Data Sent Successfully(S Toast)");
        reset();
      } else {
        console.log("Error from Backend");
        toast.error("There is been some Error (E Toast");
      }
    } catch (err) {
      console.log("There is been some error: ", err);
        toast.error("There is been some Error (E Toast");

    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" relative flex flex-col justify-between items-center w-[30%] gap-[50px] border-2 p-[20px] mx-auto my-[10vh]">
          <input
            type="text"
            name="Name"
            placeholder="Enter the Name"
            className="  border-2 rounded-md p-[10px] w-[90%]"
            {...register("Name", { required: "Name is required" })}
          />
          {errors.Name && (
            <p className="absolute top-[72px] left-[50px] text-red-600 ">
              {errors.Name.message}
            </p>
          )}
          <input
            type="password"
            name="Password"
            placeholder="Enter the Password"
            className="border-2 rounded-md p-[10px] w-[90%]"
            {...register("Password", {
              required: "Password is required",
            })}
          />
          {errors.Password && (
            <p className="absolute top-[172px] left-[50px] text-red-600">
              {errors.Password.message}
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
