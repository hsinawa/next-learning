import Image from 'next/image'
import React from 'react'
import TestimonialsSlider from './TestimonialSlider'

const Testimonials = () => {
  return (
    <main>
    <section className="block md:grid md:grid-cols-2">
      <div className="flex justify-center items-center mt-[15%] md:mt-[5%]">
        <Image
          src={"/images/testimonials.png"}
          alt="sd"
          height={300}
          width={300}
          className="rounded-full"
        />
      </div>

      <div className="flex justify-center items-center mt-[10%] sm:justify-start">
        <TestimonialsSlider />
      </div>
    </section>

   
    <br/>
  </main>
  )
}

export default Testimonials