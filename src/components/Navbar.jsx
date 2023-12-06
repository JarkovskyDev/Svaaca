import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import Logo from "../assets/Logo2.jpg"
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
<div className='fixed w-full h-[75px] bg-[#ffffff] flex justify-between items-center px-4'>
        <div>
            <a href="/">
                <img src={Logo} alt="Logo" style={{width:"105px"}} />
            </a>
        </div>

        <ul className='hidden text-xl md:flex'>
            <li>
                <Link to='about' smooth={true} duration={500}>
                    <p className='border-b-2 border-transparent hover:transition duration-500 hover:delay-500 hover:border-[#390d02a9]'>O nás</p>
                </Link>
            </li>
            <li>
                <Link to='dispute' smooth={true} duration={500} offset={-120}>
                    <p className='border-b-2 border-transparent hover:transition duration-500 hover:delay-500 hover:border-[#390d02a9]'>Řešení sporů</p>
                </Link>
            </li> 
            <li>
                <Link to='supervision' smooth={true} duration={500} offset={-120}>
                    <p className='border-b-2 border-transparent hover:transition duration-500 hover:delay-500 hover:border-[#390d02a9]'>Stavební dozor</p>
                </Link>
            </li>
            <li>
                <Link to='office' smooth={true} duration={500} offset={-120}>
                    <p className='border-b-2 border-transparent hover:transition duration-500 hover:delay-500 hover:border-[#390d02a9]'>Úřady</p>
                </Link>
            </li>
            <li>
                <Link to='contacts' smooth={true} duration={500}>
                    <p className='border-b-2 border-transparent hover:transition duration-500 hover:delay-500 hover:border-[#390d02a9]'>Kontakt</p>
                </Link>
            </li>
        </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center"}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='hero-res' smooth={true} duration={500} offset={-100}>
                    O nás
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home-res' smooth={true} duration={500} offset={-80}>
                    Řešení sporů
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='supervision-res' smooth={true} duration={500} offset={-75}>
                    Stavební dozor
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='office-res' smooth={true} duration={500} offset={-80}>
                    Úřady
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='contacts' smooth={true} duration={500}>
                    Kontakt
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar