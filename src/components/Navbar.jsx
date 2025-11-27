import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 font-medium">
      {/* left hand side */}
      <img src={assets.logo} alt="logo" className="w-36"></img>

      {/* middle part list */}

      <ul className="flex justify-center items-center gap-6 ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-600 hidden"></hr>
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-600 hidden"></hr>
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-600 hidden"></hr>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-600 hidden"></hr>
        </NavLink>

        <button className="rounded-full shadow py-2 px-4 ">Admin panel</button>
      </ul>

      {/* right hand side */}

      <div className="flex justify-center gap-6">
        <img
          src={assets.search_icon}
          alt="search icon"
          className="w-5 cursor-pointer"
        ></img>

        {/* profile image */}
        <div className="relative group">
          <img
            src={assets.profile_icon}
            alt="profile icon"
            className="w-5 cursor-pointer"
          ></img>
          <div className="absolute hidden group-hover:block  right-0 pt-2 dropdown-menu">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 shadow-gray-600 shadow-md rounded-xl">
              {" "}
              <p className=" hover:text-black text-gray-400 cursor-pointer">
                My Profile
              </p>
              <p className="cursor-pointer hover:text-black text-gray-400">
                Orders
              </p>
              <p className="cursor-pointer hover:text-black text-gray-400">
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* cart image */}

        <Link to="/cart">
          <img
            src={assets.cart_icon}
            alt="cart icon"
            className="w-5 cursor-pointer"
          ></img>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
