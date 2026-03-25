import React from "react";
import Line from "../components/Line";
import Title from "../components/Title";
import { NavLink } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <Line />

      <Title text1="reset" text2="password" className="py-12" />

      <div className="max-w-lg px-4 mx-auto min-h-[50vh] flex flex-col justify-center">
        <p className="text-gray-500 text-sm mb-6">
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
            className="border border-black bg-black text-white
            hover:bg-white hover:text-black transition
            py-2.5 px-10 tracking-wide mt-4"
          >
            SEND RESET LINK
          </button>
        </form>

        <div className="mt-6 text-sm">
          <NavLink to="/login" className="underline hover:text-gray-500">
            Back to Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
