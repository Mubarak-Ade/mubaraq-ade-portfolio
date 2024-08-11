import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { MyContext } from './AppContext'
import * as Fa from 'react-icons/fa6'


function Navbar() {
  const {showNav,  handleCancel} = useContext(MyContext)
  return (
    <div className={`${showNav} md:block w-full fixed top-0 md:relative
    show md:w-fit
    left-0 bg-opacity-95 bg-pallet-2-100`}>
      <ul className='flex flex-col gap-10 md:flex-row w-full p-4 h-fit text-lg '>
        <Fa.FaX onClick={handleCancel} size={25} className='absolute right-0 mx-4 cursor-pointer md:hidden' />
        <Link smooth={true} duration={500} className='cursor-pointer' to='hero'>Home</Link>
        <Link smooth={true} duration={500} className='cursor-pointer' to='about'>About</Link>
        <Link smooth={true} duration={500} className='cursor-pointer' to='project'>Project</Link>
        <Link smooth={true} duration={500} className='cursor-pointer'>Contacts</Link>
      </ul>
    </div>
  )
}

export default Navbar