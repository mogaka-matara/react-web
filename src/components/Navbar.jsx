
import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import {Link} from 'react-router-dom'




const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div className="w-full h-[90px] bg-gray-900">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff] font-[signatures]">Sharpwriters</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/pricing'>Pricing</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/samples'>Samples</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
            <button className="ml-4">Order Now</button>
          </ul>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? < AiOutlineClose  size={30} className='text-white'/>: < AiOutlineMenu size={30} className='text-white' /> }
          
          
        </div>

        {/*Mobile Menu*/}
        <div className={nav ? 'w-full bg-gray-900 text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/pricing'>Pricing</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/samples'>Samples</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
          <button className="ml-4">Order Now</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
