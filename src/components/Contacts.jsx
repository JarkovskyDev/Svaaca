import React from 'react'
import Image from "../assets/Entrance.webp"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Contacts = () => {
  return (
    <div name="contacts" className='w-full min-h-screen flex items-center justify-center'>
        <div className='flex flex-row gap-3'>
            <div>
                <img src={Image} alt="/" className='object-cover h-[60vh] m-auto'/>
            </div>
            <div>
                <h3 className='font-bold'>Otevírací doba</h3>
                <h1>pondělí – čtvrtek: 8:00 – 17:00<br />pátek: 8:00 – 15:00<br />sobota – neděle: Zavřeno</h1><br />
                
                <h3 className='font-bold'>Adresa</h3>
                <h1>Komunardů 1154/38, <br /> 170 00  Praha 7 - Holešovice</h1><br />

                <h3 className='font-bold'>Kontakt</h3>
                <h1>Tel.: <a href="tel:+420605868225">605868225</a></h1>
                <h1>Email: <a href="mailto:svaaca.holesovice@gmail.com">svaaca.holesovice@gmail.com</a></h1>
                <br />

                <div className='flex flex-row gap-2'>
                  <a href="https://www.facebook.com/profile.php?id=100093479255893" target="_blank" rel="noopener noreferrer"><FaFacebook size={"2rem"}/></a>
                  <a href="https://www.instagram.com/svaacaholesovice/related_profiles/" target="_blank" rel="noopener noreferrer"><FaInstagram size={"2rem"}/></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contacts