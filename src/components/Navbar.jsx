import React, {useState} from 'react';
import Logo from "../images/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {BsFillPersonLinesfill} from "react-icons"

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[white] text-[#1a1a1c]'>
      <div>
        <img src={Logo} alt="mylogo" style={{ width: "250px"}} />
      </div>

    {/* menu */}

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>


    {/* Hamburger */}
    <div 
      className='md:hidden z-10'
      onClick={handleClick}
      >
      {!nav ? <FaBars /> : <FaTimes />}
    </div>



    {/* Mobilemenu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[white] flex flex-col justify-center items-center'}>
      <li className='py-6 text-4xl'>Home</li>
      <li className='py-6 text-4xl'>About</li>
      <li className='py-6 text-4xl'>Experience</li>
      <li className='py-6 text-4xl'>Skills</li>
      <li className='py-6 text-4xl'>Contact</li>
    </ul>


    {/* Socials */}
    <div className='flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
          <a className='flex justify-between items-center w-full text-white' href='/'>
            Linkedin <FaLinkedin size={30} /> 
          </a>
        </li>
      </ul>
    </div>
      
        
    </div>
  )
}

export default Navbar