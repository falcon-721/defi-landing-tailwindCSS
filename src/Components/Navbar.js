import React, { useState } from 'react'
import { AiOutlineMenuFold,AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll'


const Navbar = () => {

    const [open, setOpen] = useState(false);

    // create open toggle function
    const handleNavOpen = () => {
        setOpen(!open)
    }

    // create close toggle function
    const handleNavClose = () => {
        setOpen(!open)
    }


  return (
    <section className='w-full h-16 z-10 bg-black bg-opacity-50 fixed px-6 flex justify-between items-center'>

        {/* logo section */}
        <h1 className='text-3xl font-bold text-blue-400'>Defi</h1>

        {/* Desktop navigation menu */}
        <ul className='hidden md:flex text-slate-200 cursor-pointer font-semibold uppercase space-x-6'>
        
            <li>
            <Link to="platform" spy={true} smooth={true} offset={-20} duration={500}>Platform</Link>
            </li>

            <li>
            <Link to="developer" spy={true} smooth={true} offset={-30} duration={500}>Developers</Link>
            </li>

            <li>
            <Link to="community" spy={true} smooth={true} offset={30} duration={500}>Community</Link>
            </li>

            <li>
            <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
            </li>

            <button className='bg-blue-600 text-white bg-opacity-40 text-semibold py-1 px-4 rounded-full shadow-md'>
            Use Defi
            </button>
        </ul>

        {/* mobile menu  section*/}
        <ul className='text-white cursor-pointer md:hidden' onClick={handleNavOpen}>
            {
                (!open) ? <AiOutlineMenuFold size={25}/> : <AiOutlineClose size={25}/> 
            }
            {/* absolute menu section */}
            <ul className={(!open) ? 'hidden' : 'absolute top-16 left-0 w-full px-10 uppercase text-center font-semibold bg-black bg-opacity-90 cursor-pointer'}>

            <Link onClick={handleNavClose} to="platform" spy={true} smooth={true} offset={-20} duration={500}>
            <li className='border-b p-2 hover:bg-slate-500 rounded duration-300'>
            Platform
            </li>
            </Link>

            <Link onClick={handleNavClose} to="developer" spy={true} smooth={true} offset={-20} duration={500}>
            <li className='border-b p-2 hover:bg-slate-500 rounded duration-300'>
            Developer
            </li>
            </Link>

            <Link onClick={handleNavClose} to="community" spy={true} smooth={true} offset={-20} duration={500}>
            <li className='border-b p-2 hover:bg-slate-500 rounded duration-300'>
            Community
            </li>
            </Link>

            <Link onClick={handleNavClose} to="about" spy={true} smooth={true} offset={-20} duration={500}>
            <li className='border-b p-2 hover:bg-slate-500 rounded duration-300'>
            About
            </li>
            </Link>

            <button className='w-full my-4 py-2 rounded bg-indigo-500 shadow hover:bg-green-500 duration-500'>
            Use Defi
            </button>
        </ul>
        </ul>

    </section>
  )
}

export default Navbar