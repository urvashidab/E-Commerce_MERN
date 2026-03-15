import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Policy from "../components/Policy";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSeller />

      <Policy />
      <Subscribe />
    </div>
  );
};

export default Home;
