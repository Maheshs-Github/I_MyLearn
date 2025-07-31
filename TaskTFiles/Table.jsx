<table className="border-collapse min-w-max w-full">
          <thead className={styles.saveThead}>
            <tr className={styles.saveTr}>
              <th className="text-center sm:text-start px-4 py-3 sm:pr-0">
                Name
              </th>
              <th className="text-center sm:text-start px-4 py-3 sm:pr-0">
                {/* Saved Date */}
                Role
              </th>
              <th className="text-center sm:text-start px-4 py-3 sm:pr-0">
                {/* E-mails */}
                Message
              </th>
              <th className="text-center sm:text-start px-4  py-3 sm:pr-0">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {filteredAndSortedCandidates?.length > 0 ? (
              filteredAndSortedCandidates?.map((candidate, index) => (
                <tr key={index} className="border-b">
                  <td
                    className="capitalize flex text-center gap-3  items-center text-[14px] sm:text-[16px] px-4 py-2 sm:p-4 cursor-pointer"
                    onClick={() => handleViewUser(candidate?.userid?._id)}
                  >
                    <img
                      src={candidate?.userid?.userAvatarUrl || profile}
                      className="h-7 border  rounded-[4px] w-7"
                      alt={candidate?.userid?.fName}
                      loading="lazy"
                    />
                    <div className="underline">
                      {`${candidate?.userid?.fName} ${candidate?.userid?.lName}`}
                    </div>
                  </td>
                  <td className="capitalize text-[14px] sm:text-[16px] px-4 py-2 sm:p-4">
                    {moment(candidate?.userid?.createdAt).format("DD/MM/YYYY")}
                  </td>
                  <td className="capitalize text-[14px] text-start sm:text-[16px] px-4 py-2 sm:p-4">
                    <Link
                      to={`/recruiter/Message?conversation=${candidate?.userid?._id}`}
                      className="flex items-center gap-2"
                    >
                      <RiMessage2Line className="text-xl sm:text-md" />
                      <span>Chat with {candidate?.userid?.fName}</span>
                    </Link>
                  </td>

                  <td className="px-4 py-3 align-center">
                    <div className="flex gap-2 items-start">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          togglePopup();
                          setSelectedUser(candidate.userid?._id);
                        }}
                        className={`${styles.saveButton} !bg-main-primary-color`}
                      >
                        Invite
                      </button>
                      <button
                        className={styles.deleteButton}
                        // className="!border rounded-md   px-3 py-2   hover:bg-main-primary-color text-main-primary-color hover:text-white"

                        onClick={() =>
                          handleDeleteSavedUser(candidate.userid?._id)
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="h-64">
                  {" "}
                  {/* Adjust colSpan based on your number of columns */}
                  <div className="flex justify-center items-center w-full h-full">
                    {/* <div className="flex flex-col justify-center items-center">
                      <AlertCircle className="w-16 h-16 text-gray-400 mb-4" />
                      <p className="text-2xl font-semibold text-gray-700">
                        No data found
                      </p>
                      <p className="text-gray-500 mt-2">
                        Please try again later or check your filters.
                      </p>
                    </div> */}
                    <div className="flex flex-col items-center justify-center">
                      {/* <div className="flex flex-col justify-center items-center w-full h-full"> */}
                      <img
                        src={notFound}
                        alt="nohtigimagehere"
                        loading="lazy"
                        className="w-[300px] h-[200px]"
                      />
                      <p className="text-2xl font-semibold text-gray-700">
                        No data found
                      </p>
                      <p className="text-gray-500 mt-2">
                        Please try again later or check your filters.
                      </p>
                      {/* </div> */}
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>









//Old Codewithout a table
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
    <div className="w-full">
      <div className="md:p-6 p-3 font-poppins bg-[#fff] rounded-md mt-2 ">
        <h2 className=" text-dark-blue-one font-semibold text-2xl">
          Track Referral
        </h2>

        <div className=" ">
          <div className="flex flex-col lg:gap-4 gap-1   refferal-scroll w-[1200px] overflow-x-auto">
            <div className="flex items-center justify-start  bg-bg-color px-4 py-3 rounded-md gap-2 text-text-color text-base w-fit">
              <div className=" flex-shrink-0 min-w-[250px]">Referred To</div>
              <div className="flex-shrink-0 min-w-[350px]">Requirement</div>
              <div className="flex-shrink-0 min-w-[250px]">Location</div>
              <div className="flex-shrink-0 min-w-[200px]">Status</div>
              <div className="flex-shrink-0 min-w-[250px]">Date</div>
              <div className="flex-shrink-0 min-w-[200px]">Action</div>
            </div>

            {refTrackData.map((Data, index) => {
              return (
                <div
                  className="border-y-[1px] border-[#F9FAFB] flex justify-start px-4 py-6 rounded-md  gap-2 text-sm items-center text-text-color"
                  key={index}
                >
                  <div className="flex-shrink-0 min-w-[250px] ">
                    {Data.reffered_to}
                  </div>
                  <div className="flex-shrink-0 min-w-[350px]">
                    {Data.requiremnet}
                  </div>
                  <div className="flex-shrink-0 min-w-[250px] ">
                    {Data.location}
                  </div>
                  <div className=" flex-shrink-0 min-w-[200px] ">
                    <span
                      className={`rounded-2xl border-2  text-xs px-2 lg:px-1 py-[2px] w-[60%] flex justify-center ${
                        StatusStyle[Data.status]
                      }`}
                    >
                      {Data.status}
                    </span>
                  </div>
                  <div className=" flex-shrink-0 min-w-[250px]">
                    {Data.date}
                  </div>
                  <div className="text-primary-color flex-shrink-0 min-w-[200px] cursor-pointer">
                    View
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*  */}
      <NetworkIntoIncome />
      <NeedAssistance />
    </div>
  );
};

export default TrackReferral;

