import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
  return (
    <div name="FAQ" className='w-full min-h-screen flex items-center justify-center'>
      <div className='max-w-[768px] m-auto border rounded-lg border-[#80c5bb]'>
        <div className='p-4'>
            <Accordion 
                title='Mohu si u Vás objednat?' 
                answer='Určitě! Zavolejte, a ráda pro Vás objednávku připravím'/>
            <Accordion 
                title='Rozvážíte objednávky?' 
                answer='Bohužel ne. Objednávy jsou vždy připraveny k vyzvednutí ve Svááče.'/>
            <Accordion 
                title='Mohu si objednat dobroty, které nejsou v nabídce?' 
                answer='Určitě! Ráda to pro Vás připravím!'/>
            <Accordion 
                title='Mohu si objednat větší množství na oslavu?' 
                answer='Určitě! Ráda pro Vás připravím menu pro Vaši oslavu, svatbu, firemní akce či jiné společenské události. Ráda Vám i pomohu s výběrem a návrhem. '/>
        </div>
      </div>
    </div>
  )
}

export default FAQ