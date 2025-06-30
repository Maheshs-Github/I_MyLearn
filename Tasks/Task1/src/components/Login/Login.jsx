import React, { useState } from "react";
import Styles from "./Login.module.css";

const Login = ({ setScreen, getData }) => {
  // const NEData = useRef();
  // const Pass = useRef();
  // const [Data,setData]=useState();
  // const [DataWithState, setDataWithState] = useState({
  //   Email: "",
  //   Password: "",
  // });
  const [EmailVal, setEmailVal] = useState("");
  const [PasswordVal, setPasswordVal] = useState("");
  const [ShowError, setShowError] = useState(false);
  const [ShowErrorPC, setShowErrorPC] = useState(false);
  const [CPassword, setCPassword] = useState("");
  const handleCPass = () => {
    if (PasswordVal !== CPassword) {
      setShowErrorPC(true);
    } else {
      setShowErrorPC(false);
    }
  };
  const handleNo = (e) => {
    const value = e.target.value;
    console.log("Value: ", value);
    // if (!/^\d{0,10}/.test(value)) {
    //   setEmailVal(value);
    // }
    // if (!/\d{10}$/.test(value) && value.length === 1011) {
    if (!/\d{10}$/.test(value)) {
      setShowError(true);
    } else {
      setEmailVal(value);
      setShowError(false);
    }
  };
  const handleLData = () => {
    // NEData.current.value;
    // Pass.current.value;
    // console.log(`D1: ${NEData.current.value} P1:${Pass.current.value}`);
    // getData(NEData.current.value, Pass.current.value);
    // console.log(
    //   `Email: ${DataWithState.Email} & Password: ${DataWithState.Password}`
    // );
    // getData(DataWithState.Email, DataWithState.Password);
    console.log(`Email: ${EmailVal} & Password: ${PasswordVal}`);
    console.log(`Confirm Password: ${CPassword}`);
    getData(EmailVal, PasswordVal);
  };
  return (
    <div>
      <div className={Styles.Container}>
        <p>Login Form </p>
        <input
          type="text "
          // name="n1"
          name="Email"
          // value={DataWithState.Email}
          value={EmailVal}
          // placeholder="Enter Email/Phone"
          placeholder="Enter Number"
          // ref={NEData}
          // onChange={(e) => {
          //   setDataWithState({
          //     ...DataWithState,
          //     [e.target.name]: e.target.value,
          //   });
          // }}
          onChange={(e) => {
            setEmailVal(e.target.value);
            // handleNo(e);
          }}
          onBlur={(e) => {
            handleNo(e);
          }}
        />
        {ShowError && (
          <p className={Styles.P1}>Phone no should have 10 digits</p>
        )}
        <input
          type="password"
          name="Password"
          // value={DataWithState.Password}
          value={PasswordVal}
          placeholder="Enter Password"
          // ref={Pass}
          // onChange={(e) => {
          //   setDataWithState({
          //     ...DataWithState,
          //     [e.target.name]: e.target.value,
          //   });
          // }}
          onChange={(e) => {
            setPasswordVal(e.target.value);
          }}
        />
        <input
          type="password"
          value={CPassword}
          placeholder="Confirm Password"
          onChange={(e) => {
            setCPassword(e.target.value);
          }}
          onBlur={() => {
            handleCPass();
          }}
        />
        {ShowErrorPC && <p className={Styles.P2}>Password do not match</p>}
        <button
          onClick={() => {
            setScreen(true);
            handleLData();
          }}
          // onSubmit={(e) => {
          //   handleNo(e);
          // }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
