import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SimpleForm from "./components/SimpleForm";
// import SimpleForm from "./components/SimpleFormVal";
// import SimpleForm from "./components/SimpleFormVal2";
// import SimpleForm from "./components/RHF";
// import SimpleForm from "./components/RHFYup";
import ByRequirement from "./components/ByRequirement";
import ScrollComp from "./components/ScrollComp";
import ReferralEarning from "./components/ReferralEarning";

const App = () => {
  return (
    <div>
      {/* <h1 className="text-6xl text-cyan-500">Hello There</h1> */}
      <SimpleForm></SimpleForm>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* <ByRequirement /> */}
      {/* <ScrollComp></ScrollComp>
      <ReferralEarning></ReferralEarning> */}
    </div>
  );
};

export default App;

//
//
// MOve our task file to the Task folder
// Let's see about the Outlet and how things are used
// So never use margin to position element
//also never use the width on a input field rather use w-full with a gap
//let's convert this layout into flex , which is grid rn
// also let's see the how button is align there
//Let's see about the gap how it effects
