import React from "react";

import Line from "../components/Line";
import Subscribe from "../components/Subscribe";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Title from "../components/Title";

const Contact = () => {
  return (
    <>
      <Line />
      <Title text1="contact" text2="us" className="py-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* left side */}

          <div className="flex flex-col gap-8">
            {/* store */}
            <div>
              <h2 className="text-xl tracking-widest font-light mb-2">
                OUR STORE
              </h2>

              <p className="text-gray-500 leading-relaxed">
                9876 Gerard Station Suite ABC
                <br />
                Vancouver, Canada
              </p>
            </div>

            {/* customer care */}
            <div>
              <h2 className="text-xl tracking-widest font-light mb-3">
                CUSTOMER CARE
              </h2>

              <div className="flex items-center gap-2 text-gray-700">
                <FaPhoneAlt className="text-sm" />
                <span>(123) 456-7890</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-2">
                <MdEmail className="text-base" />
                <a
                  href="mailto:urvashi.dabgotra11@gmail.com"
                  className="underline hover:text-gray-500 transition"
                >
                  urvashi.dabgotra11@gmail.com
                </a>
              </div>

              <p className="text-gray-400 text-sm mt-3">
                Monday – Friday | 9 AM – 6 PM PST
              </p>

              <p className="text-gray-400 text-sm mt-1">
                We usually respond within 24 hours
              </p>
            </div>

            {/* support */}
            <div>
              <h2 className="text-xl tracking-widest font-light mb-2">
                SUPPORT
              </h2>

              <ul className="text-gray-500 text-sm space-y-1">
                <li>Shipping & Delivery</li>
                <li>Returns & Exchanges</li>
                <li>Order Tracking</li>
              </ul>
            </div>
          </div>

          {/* right side */}

          <form className="flex flex-col gap-4 ">
            {/* name */}
            <input
              type="text"
              required
              placeholder="NAME"
              className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300"
            ></input>

            {/* email */}
            <input
              type="email"
              required
              placeholder="E-MAIL"
              className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300 "
            ></input>

            {/* message */}
            <textarea
              required
              rows="5"
              placeholder="HOW CAN WE HELP?"
              className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300 "
            ></textarea>

            {/* button */}
            <button
              type="submit"
              className="w-fit self-start primaryBtn  mt-6 "
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <Subscribe />
    </>
  );
};

export default Contact;
