import React from 'react'
import Container from '../shared/formcomponents/Container'
import TestimonailsSlider from './TestimonailsSlider'
import TestimonailsMap from './TestimonailsMap'

const Testimonails = () => {
  return (
    <div className='py-20 bg-white my-5'>
      <Container >
        <div className='flex flex-col lg:flex-row lg:gap-12 gap-7'>
              <TestimonailsSlider/>
              <TestimonailsMap/>
        </div>
      </Container>
    </div>
  )
}

export default Testimonails