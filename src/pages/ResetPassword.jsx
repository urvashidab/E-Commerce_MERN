import React from "react";
import Line from "../components/Line";
import Title from "../components/Title";
import { NavLink } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <div className="bg-black text-white min-h-[70vh] flex flex-col justify-center">
        <h1 className="text-center text-2xl py-10 tracking-widest font-light">
          RESET PASSWORD
        </h1>
        <div className="max-w-lg px-4 mx-auto ">
          <p className="text-gray-300 text-sm mb-6">
            Enter your email address and we will send you instructions to reset
            your password.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              required
              placeholder="E-MAIL"
              className="border-b border-gray-400 py-2 px-2 outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              className="border border-white px-8 py-2.5 tracking-wide
hover:bg-white hover:text-black hover:tracking-widest cursor-pointer
transition-all duration-300
            "
            >
              SEND RESET LINK
            </button>
          </form>

          <div className="mt-6 text-sm">
            <NavLink
              to="/login"
              className="underline text-gray-300 hover:text-gray-500"
            >
              Back to Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
