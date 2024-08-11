import React from 'react'
import Image from '../assets/ionela-mat-tEzkUEOSnqs-unsplash.jpg'

function Projects() {
  return (
    <div id='project' className='h-full space-y-28 w-full bg-pallet-2-400 p-6 md:h-screen'>
        <h1 className='text-4xl font-bold text-center'>MY PROJECT</h1>
        <div className="grid place-items-center gap-4 md:grid-flow-col">
            <div className="w-80 flex flex-col bg-pallet-2-400 p-4 space-y-2 h-full shadow-2xl shadow-slate-400 border-2 border-[#201e43] rounded-3xl">
                <img className='rounded-3xl' src={Image} alt="" />
                <h2 className='text-2xl font-bold pb-2'>Quiz app</h2>
                <button className='w-fit p-2 border border-pallet-on-fire-500 rounded-xl hover:bg-pallet-on-fire-500 hover:text-white hover:border hover:border-white'>Demo →</button>
                <button className='w-fit border-pallet-2-100 border rounded-xl px-5 py-2.5 hover:bg-pallet-2-100 hover:text-white hover:border hover:border-white'>Github</button>
            </div>
            <div className="w-80 flex flex-col bg-pallet-2-400 p-4 space-y-2 h-full shadow-2xl shadow-slate-400 border-2 border-[#201e43] rounded-3xl">
                <img className='rounded-3xl' src={Image} alt="" />
                <h2 className='text-2xl font-bold pb-2'>Todo list</h2>
                <button className='w-fit p-2 border border-pallet-on-fire-500 rounded-xl hover:bg-pallet-on-fire-500 hover:text-white hover:border hover:border-white'>Demo →</button>
                <button className='w-fit border-pallet-2-100 border rounded-xl px-5 py-2.5 hover:bg-pallet-2-100 hover:text-white hover:border hover:border-white'>Github</button>
            </div>
        </div>
    </div>
  )
}

export default Projects