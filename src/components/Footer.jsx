import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import Line from "./Line.jsx";

const Footer = () => {
  return (
    <>
      <div className="w-full  py-12   flex flex-col md:flex-row gap-10 justify-between items-start">
        {/* left side */}
        <div className="flex flex-col gap-4 max-w-md">
          <img src={assets.logo} className="w-[120px]" alt="logo" />
          <p className="text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
          </p>
        </div>

        {/* middle part */}
        <div className="flex flex-col gap-4">
          <h2 className="uppercase text-xl font-semibold">Company</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-4">
          <h2 className="uppercase text-xl font-semibold">Get in touch</h2>
          <p className="text-sm">+1-647-965-0612</p>
          <p className="text-sm">urvashi.ucoe@gmail.com</p>
          <p className="text-sm">Vancouver, Canada</p>
        </div>
      </div>
      <Line />
      <p className="text-center py-4 text-sm ">
        Copyright 2024@ Urvashi Dabgotra - All Right Reserved.
      </p>
    </>
  );
};

export default Footer;
