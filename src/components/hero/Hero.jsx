import React from 'react';

import Banner from '../assets/cyber-bg.png'

const Hero = () => {
  return (
      <div className='w-full h-[90vh] top-[90px]'>
          <image src={Banner} className='object-cover h-full w-full'/>
          <div>
              <h1>
                  Sharpwriters
              </h1>
              <h1>Rise to the top of your academic
                  game with the help of our sharp and skilled writers
              </h1>
              <p>Don't struggle with complex assignments and long nights
                  of trust in the power of Sharpwriters to guide you to success
              </p>
              <div>
                  <button>Order Now</button>
                  <button>FAQ</button>
              </div>

          </div>
    </div>
    
  )
}

export default Hero;