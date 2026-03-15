import React from "react";
import Footer from "../components/Footer";
import Line from "../components/Line";
import Subscribe from "../components/Subscribe";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Line />
      <div className="flex gap-2 items-center justify-center py-10">
        <h1 className="uppercase text-2xl text-gray-500 font-medium ">
          contact <span className="text-black">us</span>
        </h1>
        <span className="linedesign"></span>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* left side */}

          <div className="flex flex-col gap-5">
            <h2 className=" text-2xl font-bold">Our Store</h2>
            <p className="text-gray-500">
              9876 Gerard Station Suite ABC, Vancouver, Canada
            </p>

            <div className="flex gap-2 items-center text-lg">
              <span>
                <FaPhoneAlt />
              </span>{" "}
              <p>(123) 456-7890</p>
            </div>

            <div className="flex gap-2 items-center text-lg">
              <span>
                <MdEmail />
              </span>
              <a
                href="mailto:urvashi.dabgotra@gmail.com"
                className="underline text-blue-600 hover:text-blue-700"
              >
                urvashi.dabgotra11@gmail.com
              </a>
            </div>
            <h2 className="text-2xl font-bold">Careers at Forever</h2>
            <p className="text-gray-500">
              Learn more about our teams and job openings.
            </p>

            <button className="btnDesign w-fit">Explore Jobs</button>
          </div>

          {/* right side */}

          <form className="flex flex-col gap-1 ">
            <label>Name</label>
            <input
              type="text"
              required
              className="border  mb-2 border-gray-400 rounded py-2 px-4 outline-none focus:ring-1 focus:ring-[#E2B59A] "
            ></input>

            <label>Email</label>
            <input
              type="email"
              required
              className="border mb-2 border-gray-400 rounded py-2 px-4 outline-none focus:ring-1 focus:ring-amber-600 "
            ></input>
            <label>Message</label>
            <textarea
              required
              rows={5}
              placeholder="How can we help?"
              className="border mb-2 border-gray-400 rounded py-2 px-4 outline-none focus:ring-1 focus:ring-amber-600 "
            ></textarea>
            <button type="submit" className=" btnDesign w-fit ">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Subscribe />
    </>
  );
};

export default Contact;
