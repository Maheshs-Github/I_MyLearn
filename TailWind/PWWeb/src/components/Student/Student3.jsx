import React from "react";
import { Chars, Arcs } from "../../assets/Data";
import StudentChar from "./StudentChar";
import StudentArc from "./StudentArc";

const Student = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-4 mb-4">
      <div className="flex justify-center items-center flex-col mt-4 mb-4">
        <div className="w-[200px] h-4 border-b-6 border-yellow-400 mt-2 rounded-sm"></div>
      </div>
      {/* This is a Best Char Section */}

      <h2 className="text-[#EE4D57] text-xl md:text-3xl font-bold mt-[30px]">
        Best One Piece Characters
      </h2>
      <div className="flex justify-evenly items-center flex-wrap mt-8 mb-8 p-3 gap-4 md:flex-nowrap">
        {Chars.map((Data) => {
          return (
            <StudentChar
              Name={Data.Name}
              Img={Data.Img}
              Description={Data.Description}
            />
          );
        })}
      </div>

      {/* This is a Best Arcs Section */}
      <h2 className="text-[#EE4D57] md:text-3xl text-2xl font-bold my-[30px] p-3">
        Best One Piece Arcs
      </h2>
      <div className="flex justify-evenly items-center  mt-8 mb-8 flex-wrap md:flex-nowrap gap-4 w-full p-3">
        {Arcs.map((Data) => {
          return (
            <StudentArc
              Name={Data.Name}
              Img={Data.Img}
              Description={Data.Description}
            />
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
