// import React from "react";

// const TrackReferral = () => {
//   return (
//     <div>
//       <div className="md:p-6 p-3 font-poppins bg-[#fff] rounded-md mt-2">
//         <h2 className=" text-RefForm-text-color font-semibold text-2xl">
//           Track Referral
//         </h2>

//         <div className="grid grid-cols-6 bg-RefFormField-bg-color px-4 py-2 rounded-md gap-2 text-text-color text-base">
//           <div className=" ">Referred To</div>
//           <div className="">Requirement</div>
//           <div className="">Status</div>
//           <div className="">Location</div>
//           <div className="">Date</div>
//           <div className="">Action</div>
//         </div>
//         <div className="shadow-sm grid grid-cols-6  px-4 py-6 rounded-md  gap-1 text-text-color text-sm items-center">
//           <div>John Anderw</div>
//           <div>Residential</div>
//           <div>Baner, Pune</div>
//           <div className="flex ">
//             <span className="text-[#DC3545] rounded-2xl border-2 border-[#DC3545] text-xs px-2 py-[2px]">
//               Pending
//             </span>
//           </div>
//           <div className="">02 June 2025</div>
//           <div className="text-primary-color ">View</div>
//         </div>
//         {/* <div className="shadow-sm grid grid-cols-6  px-4 py-6 rounded-md  gap-2"> */}

//         {/* <div className="shadow-sm flex items-center  px-4 py-6 rounded-md  gap-3 flex-1">
//           <div className="text-text-color text-base basis-1/6">John Anderw</div>
//           <div className="text-text-color text-base  text-nowrap ">
//             4BHK Furnished Luxuries Flat
//           </div>
//           <div className="text-text-color text-base ">Baner, Pune</div>
//           <div className="flex  basis-1/6">
//             <span className="text-[#FFC107] rounded-2xl border-2 border-[#FFC107] text-sm px-2 py-[2px] basis-1/6">
//               In Progress
//             </span>
//           </div>{" "}
//           <div className="text-text-color text-base basis-1/6">
//             02 June 2025
//           </div>
//           <div className="text-primary-color text-base  basis-1/6">View</div>
//         </div> */}
//         <div className="shadow-sm grid grid-cols-6  px-4 py-6 rounded-md  gap-2 text-sm items-center justify-center">
//           <div className="text-text-color  ">John Anderw</div>
//           <div className="text-text-color ">4BHK Furnished Luxuries Flat</div>
//           <div className="text-text-color ">Baner, Pune</div>
//           <div className="flex ">
//             <span className="text-[#FFC107] rounded-2xl border-2 border-[#FFC107] text-xs px-2 py-[2px] ">
//               In Progress
//             </span>
//           </div>
//           <div className="text-text-color ">02 June 2025</div>
//           <div className="text-primary-color ">View</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrackReferral;








import React from "react";

const TrackReferral = () => {
  const referralData = [
    {
      id: 1,
      referredTo: "John Anderw",
      requirement: "Residential",
      location: "Baner, Pune",
      status: "Pending",
      statusColor: "#DC3545",
      date: "02 June 2025"
    },
    {
      id: 2,
      referredTo: "John Anderw",
      requirement: "4BHK Furnished Luxuries Flat",
      location: "Baner, Pune",
      status: "In Progress",
      statusColor: "#FFC107",
      date: "02 June 2025"
    },
    {
      id: 3,
      referredTo: "John Anderw",
      requirement: "Commercial",
      location: "Baner, Pune",
      status: "In Progress",
      statusColor: "#FFC107",
      date: "02 June 2025"
    },
    {
      id: 4,
      referredTo: "John Anderw",
      requirement: "4BHK Furnished Luxuries Flat",
      location: "Baner, Pune",
      status: "Done",
      statusColor: "#28A745",
      date: "02 June 2025"
    }
  ];

  return (
    <div>
      <div className="md:p-6 p-3 font-poppins bg-[#fff] rounded-md mt-2">
        <h2 className="text-RefForm-text-color font-semibold text-2xl mb-4">
          Track Referral
        </h2>
        
        {/* Header */}
        <div className="flex flex-col gap-4 font-normal">
        <div className="flex bg-RefFormField-bg-color px-4 py-2 rounded-md gap-2 text-text-color text-base ">
          <div className="w-[15%]">Referred To</div>
          <div className="w-[25%]">Requirement</div>
          <div className="w-[15%]">Status</div>
          <div className="w-[15%]">Location</div>
          <div className="w-[15%]">Date</div>
          <div className="w-[15%]">Action</div>
        </div>
        
        {/* Data Rows */}
        {referralData.map((item) => (
          <div key={item.id} className="shadow-sm flex px-4 py-4 rounded-md gap-2 text-text-color text-sm items-center  border-gray-100 border-x-[1px] border-[##F9FAFB]">
            <div className="w-[15%]">{item.referredTo}</div>
            <div className="w-[25%]">{item.requirement}</div>
            <div className="w-[15%] flex items-center justify-start">
              <span 
                className="rounded-2xl border-2 text-xs px-2 py-[2px] w-[55%] flex justify-center"
                style={{ 
                  color: item.statusColor, 
                  borderColor: item.statusColor 
                }}
              >
                {item.status}
              </span>
            </div>
            <div className="w-[15%]">{item.location}</div>
            <div className="w-[15%]">{item.date}</div>
            <div className="w-[15%] text-primary-color cursor-pointer">View</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default TrackReferral;