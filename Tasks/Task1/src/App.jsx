import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import OTP_Screen from "./components/OTP_Screen/OTP_Screen";

const App = () => {
  const [Screen, setScreen] = useState(false);
  const getDataInP = (NE1, P1) => {
    console.log(`Name: ${NE1} And Pass: ${P1}`);
  };
  return (
    <div>
      {/* <h1>Hello There</h1> */}
      {!Screen ? (
        <Login setScreen={setScreen} getData={getDataInP} />
      ) : (
        <OTP_Screen />
      )}
    </div>
  );
};

export default App;
