import React, { useState } from "react";
import Logo from "../images/logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[screen] flex justify-between items-center px-4 bg-[#1a1a1c] text-[white] z-50">
      {/* Logo */}

      <div>
        <Link
          className="cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
          delay={1000}
        >
          <img src={Logo} alt="mylogo" style={{ width: "150px" }} />
        </Link>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="work" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes className="text-black" />}
      </div>

      {/* Mobilemenu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1a1a1c] flex flex-col justify-center items-center text-gray-300"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Socials */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/fahadguled/"
              target="_blank"
            >
              <p className="text-[#ba30e8]">Linkedin</p>{" "}
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/fahadg206"
              target="_blank"
            >
              <p className="text-[#ba30e8]">GitHub</p> <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://twitter.com/fahadg_dev"
              target="_blank"
            >
              <p className="text-[#ba30e8]">Twitter</p> <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://calendly.com/fahad-guled/interview"
              target="_blank"
            >
              <p className="text-[#ba30e8]">Calendly</p>{" "}
              <FaCalendarAlt size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
