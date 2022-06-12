import React, {useState} from 'react';
import Logo from "../images/logo.png";
import {HiOutlineMail} from "react-icons/hi"
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs"

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1a1a1c] text-[white]'>
      {/* Logo */}
      
      <div>
        <img src={Logo} alt="mylogo" style={{ width: "150px"}} />
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
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
          <a className='flex justify-between items-center w-full text-white' href='/'>
            <p className='text-[#ba30e8]'>Linkedin</p> <FaLinkedin size={30} /> 
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
          <a className='flex justify-between items-center w-full text-white' href='/'>
          <p className='text-[#ba30e8]'>GitHub</p> <FaGithub size={30} /> 
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
          <a className='flex justify-between items-center w-full text-white' href='/'>
          <p className='text-[#ba30e8]'>Twitter</p> <FaTwitter size={30} /> 
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
          <a className='flex justify-between items-center w-full text-white' href='/'>
          <p className='text-[#ba30e8]'>Email</p> <HiOutlineMail size={30} /> 
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
          <a className='flex justify-between items-center w-full text-white' href='/'>
          <p className='text-[#ba30e8]'>Resume</p> <BsFillPersonLinesFill size={30} /> 
          </a>
        </li>
      </ul>
    </div>
      
        
    </div>
  )
}

export default Navbar