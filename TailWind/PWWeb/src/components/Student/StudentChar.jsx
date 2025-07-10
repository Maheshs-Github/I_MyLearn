import React from "react";

const StudentChar = ({ Name, Img, Description }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-4 mb-4 font-mono font-bold">
      <img
        src={Img}
        alt=""
        className="h-[20%] w-[20%] rounded-[50%] md:h-[30%] md:w-[30%]"
        // className="h-[10vh] w-[10vw] rounded-[50%]"
      />
      <p className=" text-lg md:text-2xl whitespace-normal my-1">{Name}</p>
      <p className="text-xs md:text-sm"> {Description}</p>
    </div>
  );
};

export default StudentChar;
