import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
  return (
    <div className='w-full min-h-screen'>
        <div>
            <Accordion 
                title='Do you prefer Android or iOS?' 
                answer='I like to use iOS products'/>
            <Accordion 
                title='Do you prefer CSS or Tailwins?' 
                answer='I like to use Tailwind'/>
            <Accordion 
                title='Firebase or Supabase?' 
                answer='I´m using Supabase'/>
        </div>
    </div>
  )
}

export default FAQ