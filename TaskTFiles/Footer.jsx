import React from "react";
import VYOW from "../../assets/landingPageAssets/footer/vyom.webp";
import YTIcon from "../../assets/landingPageAssets/footer/footeryt.webp";
import IGIcon from "../../assets/landingPageAssets/footer/footerinsta.webp";
import FBIcon from "../../assets/landingPageAssets/footer/footerfb.webp";

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        {/* <h2>Hello Fellas, This is a Footer</h2> */}
        <div className="FOptns h-[340px] flex-shrink-0 bg-white b-t-[0.739] border-[#E0E0E0] flex justify-evenly items-center">
          <div className="Content1 flex flex-col items-start gap-6">
            <img src={VYOW} alt="VYOW Image" className="w-28 " />
            <p>Luxury, Legally Delivered.</p>
          </div>
          <div className="Content2 flex flex-col gap-y-5">
            <div>Quick Links</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-2">
                <div>&gt;</div>
                <div>About</div>
              </div>
              <div className="flex gap-2">
                <div>&gt;</div>
                <div>Terms</div>
              </div>
              <div className="flex gap-2">
                <div>&gt;</div>
                <div>Blog</div>
              </div>
              <div className="flex gap-2">
                <div>&gt;</div>
                <div>Contact Us</div>
              </div>
              <div className="flex gap-2">
                <div>&gt;</div>
                <div>Privacy</div>
              </div>
            </div>
          </div>
          <div className="Content3 flex flex-col">
            <div>Social</div>
            <div className="SIcons flex ">
              <img src={FBIcon} alt="FaceBook" className="w-10" />
              <img src={YTIcon} alt="You Tube" className="w-10" />
              <img src={IGIcon} alt="InstaGram" className="w-10" />
            </div>
          </div>
        </div>
        <div className="FCRight"></div>
      </div>
    </div>
  );
};

export default Footer;
