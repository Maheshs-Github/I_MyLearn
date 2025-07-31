import axios from "axios";
import React, { useEffect, useState } from "react";
import NetworkIntoIncome from "../components/NetworkIntoIncome";
import NeedAssistance from "../components/NeedAssistance";

const TrackReferral = () => {
  const [refTrackData, setRefTrackData] = useState([]);
  useEffect(() => {
    const FetchTrackData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/Data");
        // console.log("Data: ", response);
        // console.log("Data 1: ", response.data);
        // console.log(response.data.message)
        setRefTrackData(response.data);
      } catch (err) {
        console.log("There is been Error: ", err);
      }
    };
    FetchTrackData();
  }, []);

  const StatusStyle = {
    Pending: "text-[#DC3545] border-[#DC3545] bg-[#FCEBEC]",
    "In Progress": "text-[#FFC107] border-[#FFC107] bg-[#FFF9E6]",
    Done: "text-[#28A745] border-[#28A745] bg-[#EAF6EC]",
  };
  return (
    <div>
      <div className="md:p-6 p-3 font-poppins bg-[#fff] rounded-md mt-2 w-full">
        <h2 className=" text-dark-blue-one font-semibold text-2xl">
          Track Referral
        </h2>

        {/* // You can also add smooth scrolling behavior */}
        {/* <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-gray-100 scrollbar-track-rounded-full"> */}
        <div className="w-full overflow-x-auto scrollbar-always-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-gray-100 scrollbar-track-rounded-full ">
          <div className="flex flex-col gap-4 mt-4 min-w-[1000px]">
            <div className="flex items-center justify-start w-full bg-bg-color px-4 py-3 rounded-md gap-2 text-text-color text-base">
              <div className=" min-w-[150px]">Referred To</div>
              <div className="min-w-[250px]">Requirement</div>
              <div className="min-w-[200px]">Location</div>
              <div className="min-w-[150px]">Status</div>
              <div className="min-w-[150px]">Date</div>
              <div className="min-w-[100px]">Action</div>
            </div>

            {refTrackData.map((Data, index) => {
              return (
                <div
                  className="border-y-[1px] border-[#F9FAFB] flex justify-start px-4 py-6 rounded-md  gap-2 text-sm items-center text-text-color"
                  key={index}
                >
                  <div className=" min-w-[150px] ">{Data.reffered_to}</div>
                  <div className=" min-w-[250px]">{Data.requiremnet}</div>
                  <div className="min-w-[200px] ">{Data.location}</div>
                  <div className=" min-w-[150px] ">
                    <span
                      className={`rounded-2xl border-2  text-xs px-2 lg:px-1 py-[2px] min-w-[75px] lg:min-w-[65px] flex justify-center ${
                        StatusStyle[Data.status]
                      }`}
                    >
                      {Data.status}
                    </span>
                  </div>
                  <div className=" min-w-[150px]">{Data.date}</div>
                  <div className="text-primary-color min-w-[100px] cursor-pointer">
                    View
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
      </div>
      {/*  */}
      <NetworkIntoIncome />
      <NeedAssistance />
    </div>
  );
};

export default TrackReferral;














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
              <div className=" flex justify-end gap-4 ">
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
      </div>
      {/*  */}
      <NetworkIntoIncome />
      <NeedAssistance />
    </div>
  );
};

export default ReferralEarning;
