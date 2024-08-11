import React, { useContext } from 'react'
import Logo from "../assets/inkpx-word-art.png"
import Navbar from './navbar'
import * as Fa from 'react-icons/fa6'
// import AppContext from './appContext'
import { MyContext } from './AppContext'

function Header() {

  const {handleNav} = useContext(MyContext) 
  return (
    <div className='flex justify-between md:justify-around p-4 items-center h-20
    border-slate-100 shadow-gray-900 shadow-2xl bg-pallet-2-100 text-pallet-2-400'>
      <div className="size-40 content-center">
        <img src={Logo} alt="logo" />
      </div>
      <Navbar />
      <Fa.FaBars onClick={handleNav} size={40} className='content-center md:hidden cursor-pointer' />
    </div>
  )
}

export default Header