import React from 'react'
import { Link } from 'react-scroll'
import * as Fa from 'react-icons/fa6'
function Footer() {
  return (
    <div id='footer' className='h-full bg-pallet-2-100 text-center justify-evenly text-white w-full md:flex md:h-[70lvh]'>
      <div className=" flex flex-col justify-center items-center gap-4">
        <h1 className='text-5xl font-mono font-bold'>SHINA</h1>
        <nav>
            <ul className='flex space-x-6 text-xl'>
                <Link to='hero' smooth={true} duration={500} className="cursor-pointer">Home</Link>
                <Link to='about' smooth={true} duration={500} className="cursor-pointer">About</Link>
                <Link to='projects' smooth={true} duration={500} className="cursor-pointer">Projects</Link>
                <Link to='footer' smooth={true} duration={500} className="cursor-pointer">Feedback</Link>
            </ul>
        </nav>
        <div className="flex space-x-4 p-4 items-center justify-center">
          <a href="#"><Fa.FaFacebookF size={39} mask='square' className='bg-white p-2 rounded-xl cursor-pointer text-blue-700 active:scale-90' /></a>
          <a href="#"><Fa.FaTwitter size={40} mask='square' className='bg-white p-2 rounded-xl cursor-pointer text-blue-500 active:scale-90'/></a>
          <a href="#"><Fa.FaSquareGithub size={40} className='rounded-xl cursor-pointer text-white active:scale-90' /></a>
          <a href="#"><Fa.FaWhatsapp size={40} className='rounded-xl cursor-pointer bg-green-500 p-1 active:scale-90' /></a>           
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
          <h1 className='p-4 text-xl'>Send Me Message</h1>
          <input type="text" className='bg-white w-96 h-56 p-4 text-black text-start' />
          <button className='px-6 py-3 text-base font-serif hover:bg-fuchsia-800 active:scale-95 w-80 rounded-2xl bg-fuchsia-700 m-4'>Send</button>
      </div>
    </div>
  )
}

export default Footer