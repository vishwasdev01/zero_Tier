import React from "react";
import { PiGithubLogo } from "react-icons/pi";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { BsMastodon } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex mx-auto w-[90%] gap-5 py-10 flex-col">
      <div className="flex gap-5">
        <PiGithubLogo
          fontSize={"25px"}
          className="hover:text-blue-700 cursor-pointer"
        />
        <ImLinkedin2
          fontSize={"25px"}
          className="hover:text-blue-700 cursor-pointer"
        />
        <AiOutlineYoutube
          fontSize={"25px"}
          className="hover:text-blue-700 cursor-pointer"
        />
        <LuFacebook
          fontSize={"25px"}
          className="hover:text-blue-700 cursor-pointer"
        />
        <FiTwitter
          fontSize={"25px"}
          className="hover:text-blue-700 cursor-pointer"
        />
        <BsMastodon
          fontSize={"25px"}
          className="hover:text-blue-700 cursor-pointer"
        />
      </div>
      <div className="flex justify-between text-lg py-4">
        <p>© 2023 ZeroTier, Inc. All rights reserved.</p>
        <div className="flex gap-5">
          <p>Terms</p>
          <p> Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
