import React from 'react'

function Info() {
  return (
    <div className='w-[1300px] h-[150px] mb-10 mt-[80px] bg-gradient-to-r from-[#d1ecd3] via-[#f7f8ff] to-[#bcc7f9]'>
     <div className="flex justify-around items-center h-[100%]">
        <div className="">
            <h1 className='text-2xl font-semibold'>Use AI features in VS Code for free</h1>
        </div>
        <div className="">
            <p className='font-medium'>No trial. No credit card required. Just your GitHub account.</p>
            <button className='mt-3 border rounded p-2 cursor-pointer bg-gray-100'>Try free</button>
        </div>
     </div>
    </div>
  )
}

export default Info