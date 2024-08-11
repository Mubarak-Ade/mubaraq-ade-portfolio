import React from 'react'
import { Link } from 'react-scroll'
import * as Fa from 'react-icons/fa6'
function Footer() {
  return (
    <div className='h-[70lvh] bg-pallet-2-100 text-center text-white  flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-5xl font-mono font-bold'>SHINA</h1>
        <nav>
            <ul className='flex space-x-6 text-xl'>
                <Link to='hero' smooth={true} duration={500} className="cursor-pointer">Home</Link>
                <Link to='about' smooth={true} duration={500} className="cursor-pointer">About</Link>
                <Link to='projects' smooth={true} duration={500} className="cursor-pointer">Projects</Link>
                <Link to='footer' smooth={true} duration={500} className="cursor-pointer">Feedback</Link>
            </ul>
        </nav>
        <div className="flex space-x-4 p-4">
            <Fa.FaFacebookF size={49} mask='square' className='bg-white p-2 rounded-xl cursor-pointer' color='#000000' />
            <Fa.FaTwitter size={50} mask='square' className='bg-white p-3 rounded-xl cursor-pointer' color='#000000' />
            <Fa.FaSquareGithub size={50} className='rounded-xl cursor-pointer' color='#ffffff' />
        </div>
    </div>
  )
}

export default Footer