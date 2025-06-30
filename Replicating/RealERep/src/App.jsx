import React, { useState } from "react";
import "./App.css";
import { FaChevronDown, FaChevronUp, FaUserAltSlash } from "react-icons/fa";
import { IoSettingsOutline, IoSearchSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { VscBellDot } from "react-icons/vsc";

const App = () => {
  const [cityValue, setCityValue] = useState("Select City");
  const [CityDropDown, setCityDropDown] = useState(false);

  const handleCityD = () => {
    setCityDropDown((Click) => !Click);
  };
  return (
    <div className="p-2">
      <div className="bg-white rounded-lg   p-4">
        <div className=" bg-gray-100 rounded-lg p-2 h-12 flex w-full justify-between items-center">
          {/* <div className="SearchBar "> */}
          <div className=" flex justify-between w-[9vw] font-medium ">
            <button
              className="flex w-full justify-between items-center"
              onClick={() => handleCityD()}
              // onClick={() => {
              //   setCityDropDown((Click) => !Click);
              // }}
            >
              {cityValue}

              <span>{!CityDropDown ? <FaChevronDown /> : <FaChevronUp />}</span>
            </button>
          </div>
          <div className="Search flex justify-between items-center w-[18vw]">
            <input type="search" name="SearchLand" />
            <IoSearchSharp />
          </div>
          {/* </div> */}
          <div>
            <VscBellDot />
          </div>
          <div>
            <IoSettingsOutline />
          </div>
          <div>
            <FaUserAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
