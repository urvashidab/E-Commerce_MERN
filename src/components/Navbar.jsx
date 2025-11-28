import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiPackage, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => setMenu(!menu);

  return (
    <nav className="flex justify-between items-center py-5 font-medium">
      {/* left hand side */}
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="logo" className="w-36"></img>
      </Link>

      {/* middle part list */}

      <ul className="lg:flex justify-center text-sm  gap-6 hidden  ">
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

        {/* <button className="rounded-full shadow  py-2 px-3 cursor-pointer ">
          Admin panel
        </button> */}
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
          <div className="absolute hidden group-hover:block  right-0 pt-2 border rounded  bg-gray-50 dropdown-menu">
            <div className="flex flex-col gap-2 w-36 py-3 px-5  ">
              <Link
                to="/profile"
                className="flex justify-start gap-2 items-center  text-gray-500 hover:text-gray-800  cursor-pointer"
              >
                <CgProfile />
                <p>My Profile</p>
              </Link>

              <Link
                to="/order"
                className="flex justify-start gap-2 items-center   text-gray-500 hover:text-gray-800  cursor-pointer"
              >
                <FiPackage />
                <p>Orders</p>
              </Link>

              <button className="flex justify-start gap-2 items-center   text-gray-500 hover:text-gray-800 cursor-pointer">
                <FiLogOut />

                <p>Logout</p>
              </button>
            </div>
          </div>
        </div>

        {/* cart image */}

        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart icon"
            className="w-5 cursor-pointer"
          ></img>
          <span className="absolute -top-1 -right-2 bg-[#007E6E] text-white text-xs px-1 rounded-full">
            0
          </span>
        </Link>
      </div>

      {/* mobile screens */}
      <button onClick={handleMenu} className="lg:hidden">
        {!menu ? (
          <GiHamburgerMenu className="text-2xl md:text-4xl" />
        ) : (
          <MdCancel className="text-2xl md:text-4xl" />
        )}
      </button>

      {menu && (
        <ul className="flex flex-col gap-6 md:gap-12 fixed top-20 right-0 bg-white w-1/2  h-screen  md:text-2xl shadow-lg p-10 lg:hidden">
          <NavLink to="/" onClick={handleMenu}>
            Home
          </NavLink>
          <NavLink to="/collection" onClick={handleMenu}>
            Collection
          </NavLink>
          <NavLink to="/about" onClick={handleMenu}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={handleMenu}>
            Contact
          </NavLink>
          <Link to="/cart" onClick={handleMenu}>
            Cart
          </Link>
          {/* <button className="rounded-full shadow py-2 px-4 cursor-pointer">
            Admin Panel
          </button> */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
