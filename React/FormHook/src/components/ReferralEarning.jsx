import axios from "axios";
import React, { useEffect, useState } from "react";
// import NetworkIntoIncome from "../components/NetworkIntoIncome";
// import NeedAssistance from "../components/NeedAssistance";
// import PropertyImg from "../../../assets/property_img_referal_earn.jpg";
import RImg from "../assets/react.svg";

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
      <div className="md:p-6 p-3 font-poppins bg-[#fff] rounded-md mt-2">
        <h2 className=" text-dark-blue-one font-semibold text-2xl">
          Referral Earn
        </h2>

        {/* // You can also add smooth scrolling behavior */}
        <div className="overflow-x-scroll">
          <div className="flex flex-col gap-4 mt-4  min-w-[1000px] max-w-[1300px]">
            <div className="flex items-center justify-start w-full bg-bg-color px-4 py-3 rounded-md gap-2 text-text-color text-base ">
              {/* <div className=" w-[25%]">Property Name</div>
              <div className="w-[15%]">Price</div>
              <div className="w-[15%]">Referred To</div>
              <div className="w-[15%]">Your Rewards</div>
              <div className="w-[15%]">GST 18% Deducted</div>
              <div className="w-[15%]">Amount</div> */}
              {/*  */}
              {/*  */}
              {/* <div className=" min-w-[30%]">Property Name</div>
              <div className="min-w-[15%]">Price</div>
              <div className="min-w-[15%]">Referred To</div>
              <div className="min-w-[15%]">Your Rewards</div>
              <div className="min-w-[20%]">GST 18% Deducted</div>
              <div className="min-w-[15%]">Amount</div> */}
              <div className=" min-w-[250px]">Property Name</div>
              <div className="min-w-[140px]">Price</div>
              <div className="min-w-[140px]">Referred To</div>
              <div className="min-w-[140px]">Your Rewards</div>
              <div className="min-w-[180px]">GST 18% Deducted</div>
              <div className="min-w-[140px]">Amount</div>
            </div>

            {refEData.map((Data, index) => {
              return (
                <div
                  className="border-y-[1px] border-[#F9FAFB] flex justify-start px-4 py-6 rounded-md  gap-2 text-sm items-center text-text-color"
                  key={index}
                >
                  <div className=" min-w-[30%] flex items-center gap-1">
                    <img
                      src={RImg}
                      alt="Property Image"
                      className="w-8 h-10 object-cover rounded-md"
                    />
                    <div>{Data.property_name}</div>
                  </div>
                  <div className=" min-w-[15%]">{Data.price}</div>
                  <div className="min-w-[15%] ">{Data.referred_to}</div>
                  <div className=" min-w-[15%] text-rewards-green">
                    {Data.your_rewards}
                  </div>
                  <div className=" min-w-[20%] text-GST-deduction-red">
                    {Data.GST_deducted}
                  </div>
                  <div className=" min-w-[15%] text-rewards-green">
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
      {/* <NetworkIntoIncome />
      <NeedAssistance /> */}
    </div>
  );
};

export default ReferralEarning;

// I wanted the entered email to be always in a lowercase what did we done for that
