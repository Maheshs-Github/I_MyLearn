import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form/Form";
import "./App.css";
import Header from "./components/Header/Header";
// import Student from "./components/Student/Student";
import Footer from "./components/Footer/Footer";
// import Student from "./components/Student/Student1";
// import Student from "./components/Student/Student2";
// import Student from "./components/Student/Student3";
import Student from "./components/Student/Student2 copy";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <div> */}
      {/* <h1>Hello There</h1> */}
      <NavBar></NavBar>
      {/* <Form></Form> */}
      {/* <Student></Student> */}
      <Student></Student>
      <Footer></Footer>
      {/* <Header></Header> */}
    </div>
  );
};

export default App;
