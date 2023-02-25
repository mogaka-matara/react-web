import React from 'react'

function About() {
  return (
      <div name= 'about' className='w-ful my-32'>
          <div className='max-w-[1240px] mx-auto'>
              <div className='text-center'>
                  <h1 className='text-5xl font-bold'>Trusted Web Developers Across The World</h1>
                  <p className='text-3xl py-6 text-gray-500'>a group of web developers who are recognized for
                      their skills, professionalism, and reliability
                      in delivering high-quality web development services.</p>
              </div>
              <div className='grid md:grid-cols-3 gap-3 px-2 text-center'>
                  <div className='border py-8 rounded-xl shadow-xl'>
                  <p className='text-6xl font-bold text-indigo-600'>100%</p>
                  <p className='text-gray-400 mt-2 text-3xl'>Completion</p>      
                  </div>
                  <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2 text-3xl'>Delivery</p>
                  </div>
                  <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2 text-3xl'>Transactions</p>
                </div>
                  
              </div>
          </div>
    </div>
  )
}

export default About