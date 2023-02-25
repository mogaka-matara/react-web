import React, {useState} from 'react'



import { FcMenu } from "react-icons/fc";
import { MdCancel  } from "react-icons/md"

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () =>setNav (!nav)


  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 ml-10 sm:text-4xl'>Unitas</h1>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Platforms</li>
            <li>Support</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-8'>
          <button className='border-none bg-transparent text-black mr-4'>Sign In </button>
          <button className='px-8 py-3 '>Sign Up</button>
        </div>
        <div className='md:hidden mr-4 ' onClick={handleClick}>
          {!nav ? <FcMenu className='w-5' />: <MdCancel className='w-5'/>} 
          
        </div>
      </div>
      <ul className={!nav ? 'hidden':'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-fill'>Home</li>
            <li className='border-b-2 border-zinc-300 w-fill'>About</li>
            <li className='border-b-2 border-zinc-300 w-fill'>Platforms</li>
            <li className='border-b-2 border-zinc-300 w-fill'> Support</li>
            <li className='border-b-2 border-zinc-300 w-fill'>Pricing</li>
            <li className='border-b-2 border-zinc-300 w-fill'>Contact</li>
        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>

      </ul>
    </div>
  );
};

export default Navbar