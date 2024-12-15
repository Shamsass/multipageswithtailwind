'use client'
import React ,{useState}from 'react'
import Link from 'next/link'
import  {FaShoppingCart}from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import{HiX} from 'react-icons/hi';
 
const Header = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false);

  const toggleMenu = () => {
    setIsMenuOpen (!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen (false);
  };
  return (
    <header className= "bg-blue-500 text-white py-5 flex justify-between items-center px-10 relativez-10">
      <h1 className='text-2x1 font-bold'>Chemistry World</h1>
      <nav className='hidden md:flex gap-10 text-white font-bold'>
        <Link href="/"onClick ={closeMenu}>Home</Link>
        <Link href="/About" onClick ={closeMenu}>About</Link>
        <Link href="/Instruments" onClick ={closeMenu}>Instruments/Apparatus</Link>
        <Link href="/Contact" onClick ={closeMenu}>Contact</Link>
        <FaShoppingCart className='text-white text-xl'/>
      </nav>
      <div className="md:hidden flex items-center">
        <HiMenuAlt3
        className="text-white text-3xl cursor-pointer"
        onClick={toggleMenu}
        />
</div>
<div 
className={`${
  isMenuOpen ?'block' :'hidden'
} absolute-top-0 left-0  w-full h-full bg-blue-800 p-5 md:hidden z-20`}
  >
  <div className='flex justify-end'>
      <HiX
      className="text-white text-3xl cursor-pointer"
      onClick={toggleMenu}
      />
    </div>
    <nav className='hidden md:flex gap-10 text-white font-bold'>
        <Link href="/"onClick ={closeMenu}>Home</Link>
        <Link href="/About" onClick ={closeMenu}>About</Link>
        <Link href="/Instruments" onClick ={closeMenu}>Instruments/Apparatus</Link>
        <Link href="/Contact" onClick ={closeMenu}>Contact</Link>
        <FaShoppingCart className='text-white text-xl'/>
      </nav> 

    </div>
    </header>
    
  )
}

export default Header
