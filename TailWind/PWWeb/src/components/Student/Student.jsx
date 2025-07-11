import React from "react";

const Student = () => {
  const CharData = [
    {
      Img: "",
      Name: "",
      Description: "",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col mt-4 mb-4">
      <div className="flex justify-center items-center flex-col mt-4 mb-4">
        {/* <p className="text-blue-500 text-3xl font-bold">
          Hard Work No ShortCuts!
        </p> */}
        <div className="w-[200px] h-4 border-b-6 border-yellow-400 mt-2 rounded-sm"></div>
      </div>
      {/* This is a Best Char Section */}

      <h2 className="text-[#EE4D57] text-xl md:text-3xl font-bold mt-[30px]">
        Best One Piece Characters
      </h2>
      {/* <div className="flex justify-evenly items-center flex-nowrap mt-8 mb-8 p-3 gap-4 "> */}
      <div className="flex justify-evenly items-center flex-nowrap mt-8 mb-8 p-3 gap-4 md:flex-nowrap">
        <div className="flex justify-center items-center flex-col mt-4 mb-4 font-mono font-bold">
          <img
            src="https://i.pinimg.com/736x/6f/b6/f9/6fb6f9bbb490773843c19fdb42d2bf6f.jpg"
            alt=""
            className="h-[20%] w-[20%] rounded-[50%] md:h-[30%] md:w-[30%]"
            // className="h-[10vh] w-[10vw] rounded-[50%]"
          />
          <p className=" text-lg md:text-2xl whitespace-normal my-1">Luffy</p>
          <p className="text-xs md:text-sm">Meat & Crazy Fella </p>
        </div>
        <div className="flex justify-center items-center flex-col mt-4 mb-4 font-mono font-bold">
          <img
            src="https://i.pinimg.com/1200x/0e/37/c2/0e37c2887c7a300081fc01c139a8d066.jpg"
            alt=""
            className="h-[20%] w-[20%] rounded-[50%] md:h-[30%] md:w-[30%]"
            // className="h-[10vh] w-[10vw] rounded-[50%]"
          />
          <p className="text-lg md:text-2xl my-1"> Zoro</p>
          <p className="text-xs md:text-sm"> Sword & Sleeping fella </p>
        </div>
        <div className="flex justify-center items-center flex-col mt-4 mb-4 font-mono font-bold">
          <img
            src="https://i.pinimg.com/736x/b8/dd/4c/b8dd4ce7aa461fc25baa766f0c1b50bb.jpg"
            alt=""
            className="h-[20%] w-[20%] rounded-[50%] md:h-[30%] md:w-[30%]"
            // className="h-[10vh] w-[10vw] rounded-[50%]"
          />
          <p className="text-lg md:text-2xl my-1">Sanji</p>
          <p className="text-xs md:text-sm"> Womanizer & Cooking Fella </p>
        </div>
      </div>

      {/* This is a Best Arcs Section */}
      <h2 className="text-[#EE4D57] md:text-3xl text-2xl font-bold my-[30px] p-3">
        Best One Piece Arcs
      </h2>
      <div className="flex justify-evenly items-center  mt-8 mb-8 flex-wrap md:flex-nowrap gap-4 w-full p-3">
        <div className="flex justify-start gap-2 items-center flex-col mt-4 mb-4 font-mono font-bold  w-[250px] ">
          <img
            src="https://preview.redd.it/tfqiq1aqjx351.png?width=1080&crop=smart&auto=webp&s=9f3e62eb96ab618196669178e23acce23b665c90"
            alt=""
            // className="h-[50%] w-[50%] rounded-3xl"
            className="h-[150px] w-[250px] rounded-3xl"
          />
          <p className="text-2xl ">Wano Arc</p>
          <p className="text-sm">
            Wano Arc was just OP, man it was just Something{" "}
          </p>
        </div>
        <div className="flex justify-start gap-2 items-center flex-col mt-4 mb-4 font-mono font-bold  w-[250px] ">
          <img
            src="https://images5.alphacoders.com/134/thumb-1920-1346850.png"
            alt=""
            // className="h-[50%] w-[50%] rounded-3xl"
            className="h-[150px] w-[250px] rounded-3xl"
          />
          <p className="text-2xl"> Egg Head Arc</p>
          <p className="text-sm">
            {" "}
            Man Egg Head just been going & One thing after another{" "}
          </p>
        </div>
        <div className="flex justify-start gap-2 items-center flex-col mt-4 mb-4 font-mono font-bold  w-[250px]">
          <img
            src="https://static.bandainamcoent.eu/high/one-piece/one-piece-odyssey/03-news/OPOD_LOG_Marineford/CS060820.jpg"
            alt=""
            // className="h-[50%] w-[50%] rounded-3xl"
            className="h-[150px] w-[250px] rounded-3xl"
          />
          <p className="text-2xl">MarineFord</p>
          <p className="text-sm">
            {" "}
            Do really i have talk about it , Damn liked Amazon Lilly too
          </p>
        </div>
        <div className="flex justify-start gap-2 items-center flex-col mt-4 mb-4 font-mono font-bold  w-[250px]">
          <img
            src="https://wallpapers.com/images/hd/skypiea-3840-x-2160-wallpaper-xx8vgo45qj4yum1c.jpg"
            alt=""
            // className="h-[50%] w-[50%] rounded-3xl"
            className="h-[150px] w-[250px] rounded-3xl"
          />
          <p className="text-2xl">SkyPie Arc</p>
          <p className="text-sm"> Damnn Island in Sky, Do exist u know</p>
        </div>
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
// exporting Student with Student1 element,   it is okay
// Let's see with  find and replace shortcut, search one too
//Let's practice JS interview question Coding ones too
