import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Services from "../Services";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Discover from "../components/Discover";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import { homeObjOne } from "../components/InfoSection/Data";
import { homeObjTwo } from "../components/Discover/Data";
import { homeObjThree } from "../components/SignUp/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Discover {...homeObjTwo} />

      <Services />
      <SignUp {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
