import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product" element={<Product />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
