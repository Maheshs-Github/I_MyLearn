import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  Name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  Email: yup.string().trim().required("Email is required"),

  Phone: yup.string().trim().required("Phone is required"),
  PType: yup.string().trim().required("PTYe is required"),

  // Password: yup
  //   .string()
  //   .required("Password is required")
  //   .min(8, "Password must be at least 8 characters")
  //   .matches(/[A-Z]/, "Must include at least one uppercase letter")
  //   .matches(/[a-z]/, "Must include at least one lowercase letter")
  //   .matches(/[0-9]/, "Must include at least one number")
  //   .matches(/[@$!%*?&]/, "Must include at least one special character"),
});

const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        <div className="   flex flex-col justify-between items-center w-[30%] gap-[15px] border-2 p-[20px] mx-auto my-[10vh]">
          <div className="w-[90%]">
            <label htmlFor="Name">Full Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter Full Name"
              className="  border-2 rounded-md p-[10px] w-[100%]"
              {...register("Name")}
            />
            {errors.Name && (
              <p className="mt-1 text-red-600 ">{errors.Name.message}</p>
            )}
          </div>

          <div className="w-[90%]">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              name="Email"
              placeholder="Enter Email"
              className="  border-2 rounded-md p-[10px] w-[100%]"
              {...register("Email")}
            />
            {errors.Email && (
              <p className="mt-1 text-red-600 ">{errors.Email.message}</p>
            )}
          </div>

          <div className="w-[90%]">
            <label htmlFor="Phone">Phone</label>
            <input
              type="text"
              name="Phone"
              placeholder="Enter  Phone"
              className="  border-2 rounded-md p-[10px] w-[100%]"
              {...register("Phone")}
            />
            {errors.Phone && (
              <p className="mt-1 text-red-600 ">{errors.Phone.message}</p>
            )}
          </div>
          <div className="w-[90%]">
            <label htmlFor="Name">Property Type</label>
            <select
              name="PType"
              id=""
              className="  border-2 rounded-md p-[10px] w-[100%]"
              {...register("PType")}
            >
              <option value="">Select Property Type</option>
              <option value="Villa">Villa</option>
              <option value="Luxury">Luxury</option>
              <option value="4BHK">4BHK</option>
            </select>
            {errors.PType && (
              <p className="mt-1 text-red-600 ">{errors.PType.message}</p>
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
