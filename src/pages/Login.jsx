import React, { useState } from "react";
import Line from "../components/Line";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(false);

  function handleHidePassword() {
    setHidePassword((prev) => !prev);
  }
  return (
    <>
      <Line />

      {/* top bar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-8   ">
        {/* left side-- only for large screens */}

        <div className="hidden lg:block  ">
          <img
            src={assets.LoginImage}
            className="w-full max-h-[80vh] object-cover"
            alt="fashion"
          />
        </div>

        {/* ------- */}
        {/* right side-- login form */}

        <div className="flex flex-col gap-6 justify-start ">
          <h1 className="text-center text-2xl tracking-widest font-light">
            LOG IN
          </h1>

          {/* form */}
          <form id="loginForm" className="flex flex-col gap-4  mt-6">
            {/* email */}
            <input
              type="email"
              required
              placeholder="E-MAIL"
              className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-400 "
            ></input>
            {/* password */}
            <div className="relative">
              <input
                type={hidePassword ? "text" : "password"}
                required
                placeholder="PASSWORD"
                className="w-full border-b border-gray-400 py-2 px-2 outline-none placeholder:text-gray-400"
              />

              <button
                type="button"
                onClick={handleHidePassword}
                className="absolute right-2 top-2 cursor-pointer text-lg text-gray-500 hover:text-black"
              >
                {hidePassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>

            <NavLink to="/resetpassword">
              <span className="text-sm text-black text-underline font-extralight underline">
                Have you forgotten your password?
              </span>
            </NavLink>
            {/* login button */}

            <div className="flex gap-6 mt-10 flex-col lg:flex-row ">
              <button
                type="submit"
                className="flex-1 border border-black bg-black text-white cursor-pointer hover:bg-white hover:text-black transition py-3 px-12 tracking-wide"
              >
                LOG IN
              </button>
              {/* register */}
              <button className="flex-1 border border-black bg-black text-white cursor-pointer hover:bg-white hover:text-black transition py-3 px-12 tracking-wide">
                REGISTER
              </button>
            </div>
          </form>

          <div className="flex justify-between text-sm mt-10 ">
            <div className="flex gap-1">
              <p className="text-gray-400 ">Need Help?</p>
              <NavLink to="/contact">
                <p className="text-sm text-black text-underline font-extralight underline">
                  Contact Us
                </p>
              </NavLink>
            </div>
          </div>

          {/* right side ends */}
        </div>
      </div>
    </>
  );
};

export default Login;
