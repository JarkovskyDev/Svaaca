import React from 'react'
import BGIMG from "../assets/Hero_bg_img.webp"
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${BGIMG})` }}>
      <Link to='about' smooth={true} duration={500}>
        <IoIosArrowDown size={75} color='white' className='cursor-pointer absolute bottom-5 hover:border-solid border-2 rounded-full hover:scale-110 duration-500'/>
      </Link>
    </div>
  )
}

export default Hero