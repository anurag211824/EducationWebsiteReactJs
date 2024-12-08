import React from "react";
import logo from "../edusity_assets/logo.png";
import menu from "../edusity_assets/menu-icon.png";
import Button from "./Button";
import { useState } from "react";
const Navbar = ({ isScrolled }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };
  return (
    <div
      className={`${
        isScrolled ? "bg-blue-500" : "bg-transparent"
      } flex flex-1 justify-between items-center px-5 lg:flex lg:justify-around lg:items-center text-white text-md font-semibold py-3 font-parkinsans fixed top-0 left-0 right-0 transition-all duration-300 z-10`}
    >
      <a href="#">
        {/* logo */}
        <img src={logo} alt="logo" height={150} width={150} />
      </a>
      <img
        className="lg:hidden "
        src={menu}
        alt="menu"
        width={40}
        height={40}
        onClick={toggleNavbar}
      />
      <nav className=" hidden lg:flex justify-center items-center gap-7">
        <ul className="flex justify-center items-center space-x-12">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#program">Program</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#campus">Campus</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <Button
          background="bg-white"
          textColor="text-black"
          label="Contact Us"
        />
        
      </nav>
      {
      isNavbarOpen &&(<div className="lg:hidden absolute top-0 right-7 bg-white shadow-md rounded-lg p-4 z-20 mt-7">
        <ul className="flex flex-col gap-4 text-lg font-parkinsans">
          {[
            "Home",
            "Program",
            "About Us",
            "Campus",
            "Testimonials",
            "Contact Us",
          ].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-500 text-black"
            >
              <a href={`#${item.replace(/ /g, "").toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>)
    }
    </div>
  );
};

export default Navbar;
