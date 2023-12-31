import React from 'react'
import image1 from "../assets/Bakery_1.webp"
import image2 from "../assets/Bakery_2.webp"
import image3 from "../assets/Bakery_3.webp"
import image4 from "../assets/Bakery_4.webp"
import image5 from "../assets/Bakery_5.webp"

const Bakery = () => {
  return (
    <div name="bakery" className='w-full min-h-screen flex items-center justify-center'>
      <div className='max-w-[1400px] m-auto px-4 grid lg:grid-cols-2 gap-4 sm:pt-0 sm:pb-0'>
        <div className='mt-20 grid grid-cols-2 grid-rows-6 h-[80vh] max-sm:order-3 max-sm:mt-0 sm:order-3 sm:mb-2 sm:-mt-5 lg:order-first order-3'>
          <img className='row-span-3 object-cover w-full h-full p-2' src={image1} alt="/"/>
          <img className='row-span-2 object-cover w-full h-full p-2' src={image2} alt="/" />
          <img className='row-span-2 object-cover w-full h-full p-2' src={image3} alt="/" />
          <img className='row-span-3 object-cover w-full h-full p-2' src={image4} alt="/" />
          <img className='row-span-2 object-cover w-full h-full p-2' src={image5} alt="/" />
        </div>
        <div className='flex flex-col h-full justify-center'>
          <h3 name='bakery-res' className='text-5xl font-bold max-sm:order-1 sm:order-1 order-1'>
            Pečivo
          </h3>
          <p className='text-xl text-justify pb-6 mt-2 max-sm:order-2 max-sm:py-0 sm:order-2'>Pečeme pro vás čerstvé domácí pečivo. Ochutnejte například naše křupavé domácí rohlíky a vynikající chleba. Nebo spěcháte do školy či do práce a nestíháte si udělat svačinku? Stavte se u nás, slovo sváča máme v názvu, takže za kvalitu ručíme! Bude Vám chutnat!</p>
        </div>
      </div>
    </div>
  )
}

export default Bakery