import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 font-medium">
      {/* left hand side */}
      <img src={assets.logo} alt="logo" className="w-36"></img>

      {/* middle part list */}

      <ul className="flex justify-center items-center gap-6 ">
        <NavLink to="/">
          <p>HOME</p>
          <hr></hr>
        </NavLink>

        <NavLink to="/collection">
          <p>COLLECTION</p>
          <hr></hr>
        </NavLink>

        <NavLink to="/about">
          <p>ABOUT</p>
          <hr></hr>
        </NavLink>

        <NavLink to="/contact">
          <p>CONTACT</p>
          <hr></hr>
        </NavLink>

        <button className="rounded-full shadow py-2 px-4 ">Admin panel</button>
      </ul>

      {/* right hand side */}

      <div className="flex justify-center gap-6">
        <img src={assets.search_icon} alt="search icon" className=""></img>
        <img src={assets.profile_icon} alt="profile icon"></img>
        <img src={assets.cart_icon} alt="cart icon"></img>
      </div>
    </nav>
  );
};

export default Navbar;
