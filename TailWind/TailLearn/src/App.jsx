import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      {/* Making Card With Plain CSS */}
      <div className="TBase">
        <div className="Text">Testing...</div>
        <div className="Post">
          <img src="/vite.svg" alt="" />
          <div className="ImgCont">
            <h2>TailWind CSS</h2>
            <p>By Hitesh</p>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/* Making Card With Tail CSS */}
      {/* m-1= 4px accordingly u can take how much u want or use pixels directly */}
      <div className="m-8">
        <div className="text-[23px] font-medium">Testing...</div>
        <div className="flex justify-evenly items-center w-[12%]  mt-2 p-[10px] gap-[10px] bg-gray-100 rounded-md">
          <img src="/vite.svg" alt="" className="w-[44px]" />
          <div className="ImgCont">
            <h2>TailWind CSS</h2>
            <p>By Hitesh</p>
          </div>
        </div>
      </div>
      {/* rgb(219 216 216) */}

      {/*  */}
      {/* Tail Task */}
      <div className="flex justify-evenly items-center flex-col w-[9%]  m-6 p-4 gap-[10px] bg-gray-200 rounded-md">
        <img src="/vite.svg" alt="" className="w-[40px]" />
        <div className="">
          <h2 className="font-medium">TailWind CSS</h2>
          <p>By Hitesh</p>
        </div>
      </div>

      {/*  */}
      {/* Let's create the button */}
      <button className="bg-cyan-400 m-2 w-[10%] rounded-md h-[30px] text-white font-medium font-sans hover:bg-amber-800 active:bg-green-500 dark:bg-black">
        Buy Now
      </button>

      {/*  */}
      {/* Let's about making it responsive */}
      <div className="m-6">
        <p className="font-bold text-amber-500 sm:text-black md:text-blue-500 ">
          Lorem, ipsum dolor.
        </p>
      </div>

      {/* Cart using Mobile First Approch */}
      <div>
        <div className=" bg-gray-300 max-w-sm rounded-md mx-auto overflow-hidden p-2 my-auto lg:flex lg:justify-evenly lg:items-center lg:max-w-lg lg:gap-4">
          {/* <div>Image</div> */}
          <img
            src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-2581504,resizemode-75,msid-106644690/news/international/us/one-piece-anime-how-many-seasons-are-there-on-netflix.jpg"
            alt="One Piece Image"
            className="lg:max-w-[60%]"
          />
          <div>
            <h2 className="font-bold my-2 text-lg">One Piece </h2>
            <p className="italic">
              One Piece is OP thing, just so u know, well no matter
            </p>
            <p className="text-sky-400 text-right mr-5 mt-2.5"> By Mahesh</p>
          </div>
        </div>
      </div>

      {/* // <div className="Base"> */}
      {/* <div className="grid place-items-center h-screen gap-0">
        <h1 className="text-green-400 text-2xl MyClass m-0 p-0 leading-none ">
          Hello There
        </h1>
        <div className="cont rounded-md bg-yellow-200 h-24  w-24"></div>
      </div> */}
      {/* <div className="Base m-6">
        <h1 className="text-lg">hello There</h1>
        <div className="Post bg-white w-40 h-18 rounded-2xl">
          <div className="cont1">
            <img src="/vite.svg" alt="" />
            <div className="contIn">
              <div className="N1">Mahesh Mane</div>
              <div className="D1">Dunoo ,Don't Ask</div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      {/* //   <img src="/vite.svg" alt="Imag 1" className="Img1" />
    //   <img src="/AdminLogo.png" alt="Imag 2" className="Img2" />
    //   <img src="/logo.png" alt="Imag 3" />
    //   <img src="/nav-logo.svg" alt="Imag 4" />
    // </div> */}
    </>
  );
};

export default App;
