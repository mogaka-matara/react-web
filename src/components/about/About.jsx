import React from 'react';
import bgImage from '../assets/bg3.jpg';

const About = () => {
  return (
    <div
      className="bg-cover bg-center overflow-hidden pt-20 text-white pb-12 "
      
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full px-4 lg:w-1/2 xl:w-6/12 lg:ml-20 xl:ml-46">
        <div className="mt-10 lg:mt-0">
          <span className="text-primary mb-2 mx-5 block text-lg font-semibold">
            Why Choose Us
          </span>
          <h2 className="text-dark mb-8 mx-5 text-3xl font-bold sm:text-4xl">
            Make your customers happy by giving services.
          </h2>
          <p className=" text-xl text-body-color mb-8 mx-5 lg:mx-0">
            Sharpwriters is a leading academic writing service provider, 
            dedicated to helping students achieve their academic goals. Our team 
            of experienced writers and editors is committed to delivering high-quality and 
            plagiarism-free content, tailored to meet the specific needs of each individual customer.
          </p>
          <p className="text-body-color mb-12 mx-5 text-xl lg:mx-0">
            At Sharpwriters, we understand that academic success is important for students, 
            and we strive to provide the best possible support and resources 
            to help them succeed. Our team of professional writers and editors 
            are dedicated to delivering the best academic writing services, 
            and we use the latest technologies and tools to ensure that our 
            customers receive the highest quality content.
          </p>
          <button >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
