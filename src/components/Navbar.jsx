
import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div className="w-full h-[90px] bg-gray-900">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff] ">SHARPWRITERS</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <li>Home</li>
            <li>Pricing</li>
            <li>Services</li>
            <li>Samples</li>
            <li>Contact</li>
            <li>Sign Up</li>
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
            <li className="text-2xl">Home</li>
            <li className="text-2xl">Pricing</li>
            <li className="text-2xl">Services</li>
            <li className="text-2xl">Samples</li>
            <li className="text-2xl">Contact</li>
            <li className="text-2xl">Sign Up</li>
            <li><button className="m-8 px-4">Order Now</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
