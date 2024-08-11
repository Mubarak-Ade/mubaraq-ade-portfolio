import React from 'react'

function Skills() {
  return (
    <div id='skill' className='h-full text-center p-4 bg-pallet-2-200 text-white'>
        <div className="mb-10">
            <h1 className='text-4xl font-bold'>SKILLS</h1>
            <h3 className='text-lg'>My technical levels</h3>
        </div>
        <div className="grid place-items-center md:grid-flow-col md:grid-rows-2">
          <div className="bg-pallet-2-300 text-pallet-2-400 w-60 h-28 text-center content-center m-10 rounded-3xl shadow-2xl text-xl font-serif p-2">
              <h2>HTML</h2>
          </div>
          <div className="bg-pallet-2-300 text-pallet-2-400 w-60 h-28 text-center content-center m-10 rounded-3xl shadow-2xl text-xl font-serif p-2">
              <h2>CSS</h2>
          </div>
          <div className="bg-pallet-2-300 text-pallet-2-400 w-60 h-28 text-center content-center m-10 rounded-3xl shadow-2xl text-xl font-serif p-2">
              <h2>JavaScript</h2>
          </div>
          <div className="bg-pallet-2-300 text-pallet-2-400 w-60 h-28 text-center content-center m-10 rounded-3xl shadow-2xl text-xl font-serif p-2">
              <h2>React</h2>
          </div>
        </div>
    </div>
  )
}

export default Skills