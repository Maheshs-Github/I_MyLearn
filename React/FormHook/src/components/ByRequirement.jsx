import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  // ✅ Name
  Name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),

  // ✅ Email
  Email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Must be a valid email address"),

  // ✅ Phone
  Phone: yup
    .string()
    .trim()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),

  // ✅ Property Type
  PType: yup.string().required("Property type is required"),

  // ✅ Budget
  Budget: yup
    .string()
    .trim()
    .required("Budget is required")
    .matches(/^[0-9]+$/, "Budget must be a number"),

  // ✅ BHK Requirement
  BHK: yup.string().required("BHK requirement is required"),

  // ✅ Urgency Level
  ULevel: yup.string().required("Urgency level is required"),

  // ✅ Location
  Location: yup.string().required("Location is required"),

  // ✅ Notes (optional, but max limit)
  Notes: yup.string().trim().max(500, "Notes must be under 500 characters"),

  // ✅ Consent Checkbox
  TCheck: yup.boolean().oneOf([true], "You must confirm the referral consent"),
});

const ByRequirement = () => {
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
    toast.success("Data Sent Successfully(S Toast)");

    reset();
    try {
      // const Data1 = await axios.post("http://localhost:8000/api/v1/seller/referReq", data);
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
    <div className="font-poppins bg-[#fff] rounded-md mt-2 text-RefForm-text-color">
      <div className="w-[70%] p-6 ">
        <div className=" flex flex-col gap-5">
          <h1 className=" font-poppins text-2xl font-semibold ">
            Refer with Requirement
          </h1>
          <div className="p-10">
            <div>
              {/* Section with input fields */}
              <h3 className="text-xl font-semibold mb-4">
                Referred Person Details
              </h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-x-16 gap-y-8">
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="Name" className="font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Enter Full Name"
                    className="  rounded-md p-2 w-full bg-RefFormField-bg-color"
                    {...register("Name")}
                  />
                  {errors.Name && (
                    <p className="mt-1 text-red-600 ">{errors.Name.message}</p>
                  )}
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="Email" className="font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    name="Email"
                    placeholder="Enter Email"
                    className="  rounded-md p-2 w-full bg-RefFormField-bg-color"
                    {...register("Email")}
                  />
                  {errors.Email && (
                    <p className="mt-1 text-red-600 ">{errors.Email.message}</p>
                  )}
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="Phone" className="font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Enter phone number"
                    className="  rounded-md p-2 w-full bg-RefFormField-bg-color"
                    {...register("Phone")}
                  />
                  {errors.Phone && (
                    <p className="mt-1 text-red-600 ">{errors.Phone.message}</p>
                  )}
                </div>
              </div>

              {/* Section with selection input fields */}
              <h3 className="text-xl font-semibold mt-10 mb-4">Requirement</h3>
              <div className="grid grid-cols-2 gap-x-16 gap-y-8">
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="PType" className="font-medium">
                    Property Type
                  </label>
                  <select
                    name="PType"
                    id=""
                    className=" rounded-md p-2 w-full bg-RefFormField-bg-color"
                    {...register("PType")}
                  >
                    <option value="">Select property type</option>
                    <option value="Villa">Villa</option>
                    <option value="Luxury">Luxury</option>
                    <option value="4BHK">4BHK</option>
                  </select>
                  {errors.PType && (
                    <p className="mt-1 text-red-600 ">{errors.PType.message}</p>
                  )}
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="Budget" className="font-medium">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    name="Budget"
                    placeholder="Enter Budget Range"
                    className="  rounded-md p-2 w-full bg-RefFormField-bg-color"
                    {...register("Budget")}
                  />
                  {errors.Budget && (
                    <p className="mt-1 text-red-600 ">
                      {errors.Budget.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="BHK" className="font-medium">
                    BHK Requirement
                  </label>
                  <select
                    name="BHK"
                    id=""
                    className=" rounded-md p-2 w-full bg-RefFormField-bg-color"
                    {...register("BHK")}
                  >
                    <option value="">Select bhk</option>
                    <option value="Villa">Villa</option>
                    <option value="Luxury">Luxury</option>
                    <option value="4BHK">4BHK</option>
                  </select>
                  {errors.BHK && (
                    <p className="mt-1 text-red-600 ">{errors.BHK.message}</p>
                  )}
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="ULevel" className="font-medium">
                    Urgency Level
                  </label>
                  <select
                    name="ULevel"
                    id=""
                    className=" rounded-md p-2 w-full bg-RefFormField-bg-color"
                    {...register("ULevel")}
                  >
                    <option value="">Select urgency level</option>
                    <option value="Villa">Villa</option>
                    <option value="Luxury">Luxury</option>
                    <option value="4BHK">4BHK</option>
                  </select>
                  {errors.ULevel && (
                    <p className="mt-1 text-red-600 ">
                      {errors.ULevel.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="Location" className="font-medium">
                    Location Interested In
                  </label>
                  <select
                    name="Location"
                    id=""
                    className=" rounded-md p-2 w-full bg-RefFormField-bg-color"
                    {...register("Location")}
                  >
                    <option value="">Select location</option>
                    <option value="Villa">Villa</option>
                    <option value="Luxury">Luxury</option>
                    <option value="4BHK">4BHK</option>
                  </select>
                  {errors.Location && (
                    <p className="mt-1 text-red-600 ">
                      {errors.Location.message}
                    </p>
                  )}
                </div>
                {/* <div className="flex flex-col items-start gap-2">
                  <label htmlFor="Name" className="font-medium">
                    Additional Notes
                  </label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Enter property description"
                    className="  rounded-lg p-2 w-full bg-RefFormField-bg-color h-[92px]"
                    {...register("Name")}
                  />
                  {errors.Name && (
                    <p className="mt-1 text-red-600 ">{errors.Name.message}</p>
                  )}
                </div> */}
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="Notes" className="font-medium">
                    Additional Notes
                  </label>
                  <textarea
                    id="Notes"
                    placeholder="Enter property description"
                    className="rounded-lg p-2 w-full bg-RefFormField-bg-color h-[100px] resize-none"
                    {...register("Notes")}
                  />
                  {errors.Notes && (
                    <p className="mt-1 text-red-600">{errors.Notes.message}</p>
                  )}
                </div>
              </div>
              {/* <div className="flex flex-col gap-8 mt-6">
                <div className="flex justify-start items-center gap-2">
                  <input
                    name="TCheck"
                    type="checkbox"
                    {...register("TCheck")}
                  />

                  <label
                    htmlFor="TCheck"
                    className=" text-[#4A4A4A] text-base whitespace-nowrap block"
                  >
                    I confirm that my referral has consented to be contacted.
                  </label>

                </div>
                <div className="flex justify-end  ">
                  <button className="bg-[#005E66]  text-white rounded-md text-md p-3 px-5 ">
                    Submit Requirement
                  </button>
                </div>
              </div> */}
              <div className="flex flex-col gap-8 mt-6">
                {/* ✅ Wrap checkbox and label in a flex-row */}
                <div className="flex flex-col items-start gap-1">
                  <div className="flex  items-center gap-2">
                    <input
                      id="TCheck"
                      name="TCheck"
                      type="checkbox"
                      {...register("TCheck")}
                    />
                    <label
                      htmlFor="TCheck"
                      className="text-[#4A4A4A] text-base whitespace-nowrap"
                    >
                      I confirm that my referral has consented to be contacted.
                    </label>
                  </div>

                  {/* ✅ Error below checkbox + label */}
                  {errors.TCheck && (
                    <p className="text-red-600 text-sm">
                      {errors.TCheck.message}
                    </p>
                  )}
                </div>

                {/* ✅ Submit Button */}
                <div className="flex justify-end">
                  <button className="bg-[#005E66] text-white rounded-md text-md p-3 px-5">
                    Submit Requirement
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="col-start-2">This is in a 2nd Col</div>
          <div>This is a Col</div>
          <div className="col-start-1">This is in a 1st Col</div>
          <div className="col-span-2">This is in a both Col</div>
          <div>This is a Col</div>

        </div>
      </div>
    </div>
  );
};

export default ByRequirement;

// So never use margin to position element
//also never use the width on a input field rather use w-full with a gap
//let's convert this layout into flex , which is grid rn
// also let's see the how button is align there
//Let's see about the gap how it effects
// How do we do deal merge conflicts in a VS, how to solve it
//Also disucss the steps to Run our program
//git stash
//git pull parent Dev (if parent is a Original Repo[that we have forked from])
//check git remote -v (for that)
// git stash pop
// npm i (In root folder)
// run both backend(npm start) and frontend
//check how Outlet is displaying the Content in a our Real Estate
//Write Understanding about Validation from our Learning, Don't foget that okay?
