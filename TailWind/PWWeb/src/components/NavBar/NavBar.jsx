import React, { useState } from "react";
import Styles from "./NavBar.module.css";

const NavBar = () => {
  const [Show, setShow] = useState(false);
  return (
    <div>
      {/* <h1>Hello This is a NavBAr</h1> */}
      {/* NavBar Starts Here */}
      <div className="w-full bg-gray-300 flex justify-between items-center  h-[60px] p-2 shadow-2xl">
        <div className="text-2xl whitespace-nowrap md:text-3xl text-blue-500 font-bold cursor-pointer">
          Anime Times
        </div>
        <div className="Opns basis-[500px]">
          <ul className=" hidden md:flex md:justify-evenly md:items-center ">
            <li className="font-bold text-xl cursor-pointer">Home</li>
            <li className="font-bold text-xl cursor-pointer">About US</li>
            <li className="font-bold text-xl cursor-pointer">Contact US</li>
          </ul>
        </div>
        <div className="SLOpns">
          <button className=" hidden md:block md:border-2 md:rounded-sm md:bg-sky-400 md:text-white md:p-1.5 md:font-medium cursor-pointer">
            Login Up{" "}
          </button>
          <span
            className="md:hidden text-3xl font-bold px-2 cursor-pointer  border-2 rounded-md m-3 p-0"
            onClick={() => {
              setShow(true);
            }}
          >
            &#9776;
          </span>
        </div>
      </div>
      {/* Options Pop Up */}
      {Show && (
        <div className="absolute rounded-md w-[40%]  h-fit bg-gray-300 right-0 top-0 pt-14 shadow-2xl m-1 ">
          <ul>
            <li className="pl-3 pb-6 text-2xl font-medium">Home</li>
            <li className="pl-3 pb-6 text-2xl font-medium">About Us</li>
            <li className="pl-3 pb-6 text-2xl font-medium">Contact Us</li>
          </ul>
          <div
            className="absolute top-0 right-0 text-4xl font-bold border-2 rounded-md m-3 p-0 leading-none flex justify-center items-center h-[40px] w-[40px] cursor-pointer"
            onClick={() => {
              setShow(false);
            }}
          >
            &times;
          </div>
        </div>
      )}
      {/* <div className={Styles.Img1}></div> */}
      {/* <div className={Styles.Img2}></div> */}
      <div className="w-screen h-screen bg-cover bg-center bg-[url('https://mfiles.alphacoders.com/101/thumb-1920-1013531.png')] md:bg-[url('https://images4.alphacoders.com/973/thumb-1920-973967.jpg')] "></div>

      {/* NavBar Ends  Here */}
    </div>
  );
};

export default NavBar;

// Going to Eat 14:00
