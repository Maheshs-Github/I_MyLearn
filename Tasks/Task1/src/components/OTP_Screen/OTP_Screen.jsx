import React, { useRef, useState } from "react";
import Styles from "./OTP_Screen.module.css";

const OTP_Screen = () => {
  const [OTP, setOTP] = useState(new Array(6).fill(""));
  // So this is our OTP state , we declared as Array of 6(the way we used to do it in Java) and filled it with a empty String
  const Inputs = useRef([]);
  // const [OTP, setOTP] = useState();
  const handleOnChange = (e, index) => {
    // console.log(e.target.value);
    console.log("Inputs: ",Inputs.current)
    const value = e.target.value;
    // Throught the Event (e) we are taking values from Input field
    // const DValue = /^\d?$/.test(value);
    //Let's break down /^\d?$/
    if (/^\d?$/.test(value)) {
      const NewOPT = [...OTP];
      // setOTP((NewOPT[index] = DValue));
      NewOPT[index] = value;
      setOTP(NewOPT);
      // console.log("OTP: ", OTP);
    }
    if (value !== "" && index < 5) {
      Inputs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    // console.log("Key is: ", e.key);
    // if (
    //   e.key === "Backspace" &&
    //   index > 0 &&
    //   Inputs.current[index].value === ""
    // ) {
    //   Inputs.current[index - 1].focus();
    // }
    if (e.key === "Backspace" && index > 0 && OTP[index] === "") {
      e.preventDefault();
      Inputs.current[index - 1].focus();
    }
  };
  const handleClick = () => {
    console.log("OTP: ", OTP);
  };
  return (
    <div>
      {/* <h3>this is a OTP Screen</h3> */}
      <div className={Styles.Container}>
        <p>Enter OTP </p>
        {/* <input type="text " name="n1" placeholder="Enter Email/Phone" /> */}
        {/* <input type="password" name="p1" placeholder="Enter Password" /> */}
        <div className={Styles.InputWrapper}>
          {OTP.map((Digit, index) => {
            return (
              <input
                type="text"
                key={index}
                value={Digit}
                maxLength={1}
                onChange={(e) => handleOnChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(IVal) => (Inputs.current[index] = IVal)}
              />
            );
          })}
        </div>
        {/* <div className={Styles.InputWrapper}>
          <input
            type="text"
            onChange={(e) => handleOnChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div> */}

        <button onClick={() => handleClick()}>Submit</button>
      </div>
    </div>
  );
};

export default OTP_Screen;
