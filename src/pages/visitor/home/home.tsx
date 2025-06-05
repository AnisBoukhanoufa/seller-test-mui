import Footer from "../footer/Footer";
import Blog from "../blog/blog";
import Possibility from "../possibility/Possibility";
import WhatGPT3 from "../whatGPT3/WhatGPT3";
import Header from "../header/Header";
import CTA from "../../../components/visitor/cta/cta";
import "./home.css";
import Statistics from "../statistics/statistics";
import Navbar from "components/visitor/navbar/navbar";
import { useEffect } from "react";


const Root = ({ 
  setIsLoading
 }) => {
 
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="home-content">
      <div className="gradient__bg ">
      <Navbar />
      <Header />
      </div>
      <Possibility />
      <WhatGPT3 />
      <Blog />
      <CTA />
      <Statistics />
      <Footer />
    </div>
  );
};

export default Root;
