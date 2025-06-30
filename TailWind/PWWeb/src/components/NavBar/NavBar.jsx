import React from "react";

const NavBar = () => {
  return (
    <div>
      {/* <h1>Hello This is a NavBAr</h1> */}
      <div className="w-full bg-gray-300 flex justify-between items-center  h-[60px] p-2">
        <div className="text-lg md:text-3xl text-blue-500 font-bold">
          PW Skills
        </div>
        <div className="Opns basis-[500px]">
          <ul className=" hidden md:flex md:justify-evenly md:items-center ">
            <li className="font-bold text-xl">Home</li>
            <li className="font-bold text-xl">About US</li>
            <li className="font-bold text-xl">Contact US</li>
          </ul>
        </div>
        <div className="SLOpns">
          <button className=" hidden md:block md:border-2 md:rounded-sm md:bg-sky-400 md:text-white md:p-1.5 md:font-medium">
            Login Up{" "}
          </button>
          <span class="text-2xl" className="hidden ">
            &#9776;
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
