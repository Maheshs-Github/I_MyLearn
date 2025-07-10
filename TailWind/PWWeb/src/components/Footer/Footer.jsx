import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-300 flex justify-between p-8 px-6 font-sans md:px-[150px]">
        <div className="">
          <h2 className="md:text-2xl text-lg font-medium cursor-pointer">
            {" "}
            Quick Links
          </h2>
          <div className="flex flex-col">
            <a
              className="md:text-lg text-md font-medium pl-1 text-blue-500 cursor-pointer"
              href="#"
            >
              Home
            </a>
            <a className="md:text-lg font-medium pl-1 text-md text-blue-500 cursor-pointer">
              About
            </a>
            <a className="md:text-lg font-medium pl-1 text-md text-blue-500 cursor-pointer">
              Contact
            </a>
          </div>
        </div>
        <div>
          <h2 className="md:text-2xl text-lg pl-1  font-medium ">
            One Piece Content
          </h2>
          <div className="flex flex-col">
            <a className=" text-md md:text-lg font-medium text-blue-500 pl-3 cursor-pointer">
              Manga
            </a>
            <a className="text-md md:text-lg font-medium text-blue-500 pl-3 cursor-pointer">
              Anime
            </a>
            <a className="text-md md:text-lg font-medium text-blue-500 pl-3 cursor-pointer">
              Merch
            </a>
            <a className="text-md md:text-lg font-medium text-blue-500 pl-3 cursor-pointer">
              Live Events
            </a>
            <a className="text-md md:text-lg font-medium text-blue-500 pl-3 cursor-pointer">
              Virtual Events
            </a>
            <a className="text-md md:text-lg font-medium text-blue-500 pl-3 cursor-pointer">
              Awards
            </a>
            <a className="text-md md:text-lg font-medium text-blue-500 pl-3 cursor-pointer">
              Colsplays
            </a>
          </div>
        </div>
        <div className="">
          <h2 className="md:text-2xl text-lg font-medium pb-8">
            Social Platforms{" "}
          </h2>
          <div className="Social flex justify-between">
            <a className="cursor-pointer">
              <FaYoutube size={26} />
            </a>
            <a className="cursor-pointer">
              <FaSquareInstagram size={23} />
            </a>
            <a className="cursor-pointer">
              <FaTelegram size={23} />
            </a>
            <a className="cursor-pointer">
              <FaXTwitter size={23} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 ">
        <p className="text-center py-8 font-bold font-sans">
          Made By One Piece Fan for One Piece Fans &#10084; &#10084; &#10084;
        </p>
      </div>
    </div>
  );
};

export default Footer;
