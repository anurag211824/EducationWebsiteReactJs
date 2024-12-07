import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";


const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight / 3) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[url('./edusity_assets/hero.png')] bg-center bg-cover h-screen font-parkinsans w-full">
      <div className="absolute inset-0 bg-[rgb(57,41,76,0.7)]">
        {/* Pass scroll state to Navbar */}
        <Navbar isScrolled={isScrolled} />

        <div className="relative flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            We Ensure better education
            <br />
            for a better world
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education.
          </p>
          <Button
            background="bg-white"
            textColor="text-black"
            label="Explore more →"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
