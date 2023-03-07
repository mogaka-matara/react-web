import React from 'react';
import { BiTimer} from 'react-icons/bi';
import { GrUserExpert } from 'react-icons/gr';
import { SiMicrosoftacademic } from 'react-icons/si'
import WhyCard from './WhyCard';

const WhyUs = () => {
  return (
    <div className='w-full bg-gray-800 text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          <h1 className='py-4'>Why Choose Sharpwriters</h1>
          <p className='py-4 text-xl'>
            Sharpwriters is a leading academic
            writing service provider, dedicated to
            helping students achieve their academic goals
          </p>

          {/* Card Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>

            {/* Card */}


            <WhyCard icon={<SiMicrosoftacademic size={40} />} heading='Quality Work' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.' />
            <WhyCard icon={<BiTimer size={40} />}   heading='On-Time Delivery' text='We understand the importance of deadlines, and we always deliver on time. Whether you need a paper in a few hours or a few days, we will make sure its ready when you need it.'/>
            <WhyCard icon={<GrUserExpert size={40} />} heading='Expert Writers' text='Our writers are experts in their fields, with advanced degrees and years of experience. They have a deep understanding of their subject matter and can produce high-quality work that is well-researched and well-written.' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;