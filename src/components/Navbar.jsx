import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5">
      {/* left hand side */}
      <img src={assets.logo} alt="logo" className="w-40"></img>

      {/* middle part list */}

      <ul className="flex justify-center items-center gap-6 ">
        <li className="">
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="">COLLCETION</a>
        </li>
        <li>
          <a href="">ABOUT</a>
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <button>Admin panel</button>
      </ul>

      {/* right hand side */}

      <div className="flex justify-center gap-4">
        <img src={assets.search_icon} alt="search icon"></img>
        <img src={assets.profile_icon} alt="profile icon"></img>
        <img src={assets.cart_icon} alt="cart icon"></img>
      </div>
    </nav>
  );
};

export default Navbar;
