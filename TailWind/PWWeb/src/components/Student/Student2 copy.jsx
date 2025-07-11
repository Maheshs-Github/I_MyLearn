import React from "react";
import { Chars, Arcs } from "../../assets/Data";

const Student = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-4 mb-4">
      <div className="flex justify-center items-center flex-col mt-4 mb-4">
        <div className="w-[200px] h-4 border-b-6 border-yellow-400 mt-2 rounded-sm"></div>
      </div>
      {/* This is a Best Char Section */}

      <h2 className="text-[#EE4D57] text-3xl font-bold mt-[30px]">
        Best One Piece Characters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  mt-8 mb-8 p-3 gap-[50px] gap-y-[20px] md:gap-[150px] md:gap-y-[70px]">
        {Chars.map((Data) => {
          return (
            <div className="flex justify-center items-center flex-col mt-4 mb-4 font-mono font-bold w-[250px] ">
              <img
                src={Data.Img}
                alt=""
                // className="h-[20%] w-[20%] rounded-[50%] md:h-[30%] md:w-[30%]"
                // className="h-[10vh] w-[10vw] rounded-[50%]"
                className="rounded-[50%]"
              />
              <p className=" text-lg md:text-2xl whitespace-normal my-1">
                {Data.Name}
              </p>
              <p className="text-xs md:text-sm"> {Data.Description}</p>
            </div>
          );
        })}
      </div>

      {/* This is a Best Arcs Section */}
      <h2 className="text-[#EE4D57] text-3xl  font-bold my-[30px] p-3">
        Best One Piece Arcs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  mt-8 mb-8  p-3 gap-[50px] gap-y-[35px] md:gap-[100px] md:gap-y-[50px]">
        {Arcs.map((Data) => {
          return (
            <div className="flex justify-start gap-2 items-center flex-col mt-4 mb-4 font-mono font-bold  w-fit max-w-[350px]">
              <img
                src={Data.Img}
                alt=""
                // className="h-[50%] w-[50%] rounded-3xl"
                className="h-[180px] w-[350px] rounded-3xl"
              />
              <p className="text-2xl ">{Data.Name}</p>
              <p className="text-sm">{Data.Description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Student;

//Which approch is better for reposnsive design of the that pfp's grid or flex
//let's see about the Java for DSA
// Browser folder
//Let's add marathi songs in a Playlist(u know YT ones)
//Let's see about best JS video understand it from details
//Let's see about the Taking Care of the eyes in this new enviournment
// Also taking care of the body/ health tips and all simple things,  about sleep too
//Tell the Resume modification and Github Link, 12th education
//Check Indeed jobs for Data Analytics
// Maybe we can use flex-wrap on componets like Char & Arcs with that we can set them in single for small screens
//let's make one component to take all data, u k with map method
