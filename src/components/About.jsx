import React from 'react'
import Person_image from '../assets/About_img.webp'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen'>
      <div className='max-w-[1400px] m-auto grid lg:grid-cols-2 gap-4 sm:pt-0 sm:pb-0'>

        <div className='pt-[115px]'>
          <img className='object-cover h-[80vh] m-auto' src={Person_image} alt="/"/>
        </div>

        <div className='flex flex-col h-full justify-center'>
          <h3 name='hero-res' className='text-5xl font-bold'>
            O mně
          </h3>
          <p className='text-xl text-justify pt-3'>Ahoj, jmenuji se Kája Majerová. Po studiu jsem zůstala v oboru a získala praxi v předních pražských restauracích, jakými jsou např. Next Door, Obecní dům, či OMG! Časem jsem se více našla jako cukrářka, a v roce 2023 jsem si otevřela Svááču v Holešovicích, kde nabízím zákusky, sladké pečivo, a zákusky. Není vyjímkou u mě najít vynikající chléb a jiné pečivo. A samozřejmně, vynikající kávu! Navštivte mé bistro. </p>
        </div>
      </div>
    </div>
  )
}

export default About