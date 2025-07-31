import axios from "axios";
import React, { useEffect, useState } from "react";
import NetworkIntoIncome from "../components/NetworkIntoIncome";
import NeedAssistance from "../components/NeedAssistance";
import PropertyImg from "../../../assets/property_img_referal_earn.jpg";

const ReferralEarning = () => {
  const [refEData, setRefEData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const getREData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/EData");
        // console.log("res: ",response.data)
        setRefEData(response.data);
      } catch (err) {
        console.log("There is been some error ", err);
      }

    }
    getREData();

  }, []);

useEffect(() => {
  if (refEData.length > 0) {
    const total = refEData.reduce((acc, curr) => {
      const NumberData = Number(curr.amount.replace(/[^0-9.-]+/g, ""));
      return acc + NumberData;
    }, 0);
    setTotalAmount(total);
  }
}, [refEData]);

const formattedTotal = totalAmount.toLocaleString("en-IN");

  return (
    <div>
      <div className="md:p-6 p-3 font-poppins bg-[#fff] rounded-md mt-2">
        <h2 className=" text-dark-blue-one font-semibold text-2xl">
          Referral Earn
        </h2>

        {/* // You can also add smooth scrolling behavior */}
        <div className="overflow-x-auto scrollbar-always-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-gray-100 scrollbar-track-rounded-full">
          <div className="flex flex-col gap-4 mt-4 min-w-[900px] w-[120%]">
            <div className="flex items-center justify-start w-full bg-bg-color px-4 py-3 rounded-md gap-2 text-text-color text-base">
              <div className=" w-[25%]">Property Name</div>
              <div className="w-[15%]">Price</div>
              <div className="w-[15%]">Referred To</div>
              <div className="w-[15%]">Your Rewards</div>
              <div className="w-[15%]">GST 18% Deducted</div>
              <div className="w-[15%]">Amount</div>
            </div>

            {refEData.map((Data, index) => {
              return (
                <div
                  className="border-y-[1px] border-[#F9FAFB] flex justify-start px-4 py-6 rounded-md  gap-2 text-sm items-center text-text-color"
                  key={index}
                >
                  <div className=" w-[25%] flex items-center gap-1">
                    <img
                      src={PropertyImg}
                      alt="Property Image"
                      className="w-8 h-10 object-cover rounded-md"
                    />
                    <div>{Data.property_name}</div>
                  </div>
                  <div className=" w-[15%]">{Data.price}</div>
                  <div className="w-[15%] ">{Data.referred_to}</div>
                  <div className=" w-[15%] text-rewards-green">
                    {Data.your_rewards}
                  </div>
                  <div className=" w-[15%] text-GST-deduction-red">
                    {Data.GST_deducted}
                  </div>
                  <div className=" w-[15%] text-rewards-green">
                    {Data.amount}
                  </div>
                </div>
              );
            })}
            <div className="flex justify-end gap-4 py- px-32">
              <div className="py-2 px-6 rounded-sm bg-bg-color">
                Total Amount
              </div>

              <div className="py-2  px-4 text-rewards-green">
                {formattedTotal}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <NetworkIntoIncome />
      <NeedAssistance />
    </div>
  );
};

export default ReferralEarning;

// I wanted the entered email to be always in a lowercase what did we done for that




// import React from "react";

// const ReferralEarning = () => {
//   const TrackEData = [
//     {
//       property_name: "4BHK Furnished Luxuries Flat ",
//       price: "₹5.0 Cr",
//       referred_to: "John Anderw",
//       your_rewards: "₹5,00,000",
//       GST_deducted: "-1700",
//       amount: "₹4,83,000",
//     },
//     {
//       property_name: "4BHK Furnished Luxuries Flat 2 ",
//       price: "₹5.0 Cr",
//       referred_to: "John Anderw",
//       your_rewards: "₹5,00,000",
//       GST_deducted: "-1700",
//       amount: "₹4,83,000",
//     },
//     {
//       property_name: "4BHK Furnished Luxuries Flat 3",
//       price: "₹5.0 Cr",
//       referred_to: "John Anderw",
//       your_rewards: "₹5,00,000",
//       GST_deducted: "-1700",
//       amount: "₹4,83,000",
//     },
//     {
//       property_name: "4BHK Furnished Luxuries Flat 4",
//       price: "₹5.0 Cr",
//       referred_to: "John Anderw",
//       your_rewards: "₹5,00,000",
//       GST_deducted: "-1700",
//       amount: "₹4,83,000",
//     },
//   ];

//   return (
//     <div className=" text-black w-full   h-fit py-6 bg-red-600">
//       <div className="Mahesh w-[1000px] overflow-x-auto ">
//         <div className="tableheader flex   gap-4 bg-gray-500">
//           <div className=" flex-shrink-0 min-w-[500px]">Property Name</div>
//           <div className="flex-shrink-0 min-w-[500px]">Price</div>
//           <div className="flex-shrink-0 min-w-[500px]">Referred To</div>
//           <div className="flex-shrink-0 min-w-[500px]">Your Rewards</div>
//           <div className="flex-shrink-0 min-w-[500px]">GST 18% Deducted</div>
//           <div className="flex-shrink-0 min-w-[500px]">Amount</div>
//         </div>
//         <div className="tableBody flex flex-col gap-6">
//           {TrackEData.map((item, index) => (
//             <div key={index} className="body flex gap-4 text-6xl">
//               <div className="bg-yellow-400 min-w-[500px] flex-shrink-0  text-nowrap ">
//                 {item.property_name}
//               </div>
//               <div className="bg-yellow-400 min-w-[500px]  flex-shrink-0 text-nowrap ">
//                 {item.price}
//               </div>
//               <div className="bg-yellow-400 min-w-[500px]  flex-shrink-0 text-nowrap ">
//                 {item.referred_to}
//               </div>
//               <div className="bg-yellow-400 min-w-[500px]  flex-shrink-0 text-nowrap ">
//                 {item.your_rewards}
//               </div>
//               `~ `~
//               <div className="bg-yellow-400 min-w-[500px]  flex-shrink-0 text-nowrap ">
//                 {item.GST_deducted}
//               </div>
//               <div className="bg-yellow-400 min-w-[500px] flex-shrink-0 text-nowrap ">
//                 {item.amount}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReferralEarning;

//
//
//
//
// // /


/* .scrollbar-always-visible::-webkit-scrollbar {
  width: 10px;
  height: 8px;
}


.scrollbar-always-visible::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

.scrollbar-always-visible::-webkit-scrollbar-thumb {
  background: rgb(207, 206, 206);
  border-radius: 10px;
}


.scrollbar-always-visible::-webkit-scrollbar-thumb:hover {
   background: #777777;
} */





   import axios from "axios";
import React, { useEffect, useState } from "react";
import NetworkIntoIncome from "../components/NetworkIntoIncome";
import NeedAssistance from "../components/NeedAssistance";
import PropertyImg from "../../../assets/property_img_referal_earn.jpg";

const ReferralEarning = () => {
  const [refEData, setRefEData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const getREData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/EData");
        // console.log("res: ",response.data)
        setRefEData(response.data);
      } catch (err) {
        console.log("There is been some error ", err);
      }
    };
    getREData();
  }, []);

  useEffect(() => {
    if (refEData.length > 0) {
      const total = refEData.reduce((acc, curr) => {
        const NumberData = Number(curr.amount.replace(/[^0-9.-]+/g, ""));
        return acc + NumberData;
      }, 0);
      setTotalAmount(total);
    }
  }, [refEData]);

  const formattedTotal = totalAmount.toLocaleString("en-IN");

  return (
    <div>
      <div className="md:p-6  p-3 w-full font-poppins bg-[#fff] rounded-md ">
        <h2 className=" text-dark-blue-one font-semibold text-2xl">
          Referral Earn
        </h2>

        <div className="">
          <div className="flex flex-col gap-4   Mahesh w-[1200px] overflow-x-auto">
            <div
              className="flex items-center justify-start bg-bg-color px-4 py-3 rounded-md gap-2 text-text-color text-lg
            w-fit "
            >
              <div className="flex-shrink-0  min-w-[350px]">Property Name</div>
              <div className="flex-shrink-0 min-w-[250px]">Price</div>
              <div className="flex-shrink-0 min-w-[250px]">Referred To</div>
              <div className="flex-shrink-0 min-w-[250px]">Your Rewards</div>
              <div className="flex-shrink-0 min-w-[270px]">
                GST 18% Deducted
              </div>
              <div className="flex-shrink-0 min-w-[250px]">Amount</div>
            </div>

            <div className="flex flex-col">
              {refEData.map((Data, index) => {
                return (
                  <div
                    className="border-y-[1px] border-[#F9FAFB] flex justify-start px-4 py-6 rounded-md  gap-2 text-sm items-center text-text-color"
                    z
                    key={index}
                  >
                    <div className="  min-w-[350px] flex items-center gap-1">
                      <img
                        src={PropertyImg}
                        alt="Property Image"
                        className="w-8 h-10 object-cover rounded-md"
                      />
                      <div>{Data.property_name}</div>
                    </div>
                    <div className="  min-w-[250px]">{Data.price}</div>
                    <div className=" min-w-[250px] ">{Data.referred_to}</div>
                    <div className="  min-w-[250px] text-rewards-green">
                      {Data.your_rewards}
                    </div>
                    <div className="  min-w-[270px] text-GST-deduction-red">
                      {Data.GST_deducted}
                    </div>
                    <div className="  min-w-[250px] text-rewards-green">
                      {Data.amount}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" flex justify-start gap-4 ">
              <div className="min-w-[1100px]"></div>
              <div className="min-w-[270px] flex justify-end">
                <div className="w-fit py-2 px-4 rounded-sm bg-bg-color">
                  Total Amount
                </div>
              </div>
              <div className="min-w-[250px]">
                <div className="py-2  px-4 text-rewards-green font-semibold">
                  {formattedTotal}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <NetworkIntoIncome />
      <NeedAssistance />
    </div>
  );
};

export default ReferralEarning;
