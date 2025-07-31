import React from "react";

const ScrollComp = () => {
  return (
    <div className="">
      {/* <div className="w-full overflow-x-auto scrollbar-always-visible">
        <div className="min-w-[1000px] bg-gray-100 p-4">
          <div className="flex gap-4">
            <div className="w-[15%] bg-red-200">Col 1</div>
            <div className="w-[25%] bg-blue-200">Col 2</div>
            <div className="w-[20%] bg-green-200">Col 3</div>
            <div className="w-[15%] bg-yellow-200">Col 4</div>
            <div className="w-[15%] bg-pink-200">Col 5</div>
            <div className="w-[10%] bg-purple-200">Col 6</div>
          </div>
        </div>
      </div> */}
      <div className="overflow-x-scroll my-10 flex ">
        <div className="min-w-[300px] border-2 mx-1">Div</div>
        <div className="min-w-[300px] border-2 mx-1">Div</div>
        <div className="min-w-[300px] border-2 mx-1">Div</div>
        <div className="min-w-[300px] border-2 mx-1">Div</div>
        <div className="min-w-[300px] border-2 mx-1">Div</div>
        <div className="min-w-[300px] border-2 mx-1">Div</div>
      </div>

      <div className="overflow-x-scroll my-10 flex ">
        <div className="min-w-[30%] border-2 mx-1">Div</div>
        <div className="min-w-[30%] border-2 mx-1">Div</div>
        <div className="min-w-[30%] border-2 mx-1">Div</div>
        <div className="min-w-[30%] border-2 mx-1">Div</div>
        <div className="min-w-[30%] border-2 mx-1">Div</div>
        <div className="min-w-[30%] border-2 mx-1">Div</div>
      </div>

      {/* if i don't set min in it, it will shrink, to the viewport it will not have the any overflow     */}
      {/* <div className="overflow-x-scroll my-10 flex ">
        <div className="w-[30%] border-2 mx-1">Div</div>
        <div className="w-[30%] border-2 mx-1">Div</div>
        <div className="w-[30%] border-2 mx-1">Div</div>
        <div className="w-[30%] border-2 mx-1">Div</div>
        <div className="w-[30%] border-2 mx-1">Div</div>
        <div className="w-[30%] border-2 mx-1">Div</div>
      </div> */}
    </div>
  );
};

export default ScrollComp;
