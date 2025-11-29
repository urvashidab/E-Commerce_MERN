import React from "react";
import Line from "../components/Line";
import Subscribe from "../components/Subscribe";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <>
      <Line />
      <div className="flex gap-2 items-center justify-center py-10">
        <h1 className="uppercase text-2xl text-gray-500 font-medium ">
          About <span className="text-black">us</span>
        </h1>
        <span className="linedesign"></span>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src={assets.about_img}
            alt="AboutUs Image"
            className="max-w-lg h-auto rounded-lg"
          />

          <div className="flex flex-col gap-5">
            <p className="text-gray-600 leading-7">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes. Since our inception, we've worked
              tirelessly to curate a diverse selection of high-quality products
              that cater to every taste and preference. From fashion and beauty
              to electronics and home essentials, we offer an extensive
              collection sourced from trusted brands and suppliers.
            </p>

            <h2 className="text-2xl font-semibold">Our Mission</h2>

            <p className="text-gray-600 leading-7">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2  justify-start items-center m-4 py-10">
        <h1 className="uppercase text-2xl text-gray-500 font-medium ">
          why <span className="text-black">choose us</span>
        </h1>
        <span className="linedesign"></span>
      </div>

      <div className=" gap-6 grid grid-cols-1 md:grid-cols-3 ">
        {/* left side */}
        <div className="flex flex-col gap-4 justify-start px-10 py-8 shadow-md rounded-xl bg-gray-50">
          <h2 className="font-bold">Quality Assurance:</h2>
          <p className="text-gray-500">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>

        {/* middle part */}
        <div className="flex flex-col gap-4 justify-start px-10 py-8 shadow-md rounded-xl bg-gray-50">
          <h2 className="font-bold">Convenience:</h2>
          <p className="text-gray-500">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>

        {/* left part */}
        <div className="flex flex-col gap-4 justify-start px-10 py-8 shadow-md rounded-xl bg-gray-50">
          <h2 className="font-bold">Exceptional Customer Service:</h2>
          <p className="text-gray-500">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <Subscribe />
    </>
  );
};

export default About;
