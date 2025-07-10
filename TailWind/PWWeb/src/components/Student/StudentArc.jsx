import React from "react";

const StudentArc = ({ Name, Img, Description }) => {
  return (
    <div className="flex justify-start gap-2 items-center flex-col mt-4 mb-4 font-mono font-bold  w-[250px] ">
      <img
        src={Img}
        alt=""
        // className="h-[50%] w-[50%] rounded-3xl"
        className="h-[150px] w-[250px] rounded-3xl"
      />
      <p className="text-2xl ">{Name}</p>
      <p className="text-sm">{Description}</p>
    </div>
  );
};

export default StudentArc;
