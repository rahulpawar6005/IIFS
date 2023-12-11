import React from "react";
import Footer from "../Footer";
import HomeSlider from "./HomeSlider";
import ServicesSection from "./ServicesSection";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <ServicesSection />

      <Footer />
    </>
  );
};

export default Home;
