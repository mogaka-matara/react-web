import React from 'react';

import heroVid from '../assets/video.mp4';

const Hero = () => {
  return (
      <div className='w-full h-[90vh] top-[90px] cursor-pointer'>
                <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
          />
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class=" px-4 lg:w-5/12">
          <div class="hero-content mx-5 pt-16">
            <h1
              className="text-white mb-3 text-3xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
            Rise to the top of your academic game with the help of our sharp and skilled writers
            </h1>
            <p class="text-white text-xl mb-8 max-w-[480px]">
              Don't struggle with complex assignments and long nights of 
              trust in the power of Sharpwriters to guide you to success."
            </p> 
             <button className="m-2">Order Now</button>
            <div class="clients pt-16">
            </div>
          </div>
        </div>
        

      </div>
    </div>
    </div>
    
  )
}

export default Hero;