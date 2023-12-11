import React from 'react'
import image_bg from "../assets/Hero_bg_img.webp"
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-cover bg-center hidden lg:flex' style={{ backgroundImage: `url(${image_bg})` }}>
      <Link to='about' smooth={true} duration={500}>
        <IoIosArrowDropdown size={75} color='white' className='cursor-pointer absolute bottom-5 hover:scale-110 duration-500'/>
      </Link>
    </div>
  )
}

export default Hero