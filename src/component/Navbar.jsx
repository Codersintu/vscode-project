import React from 'react'
import vsimg from "../assets/vs.png"
import Tgimg from "../assets/toggle.png"
import searchimg from "../assets/search.png"

function Navbar() {
  return (
    <div className='w-[100vw] shadow-2xs h-[70px] z-[999] sticky top-0 border-b border-b-gray-300'>
        <div className=" h-[100%]  flex justify-around items-center">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-4">
                    <img className='w-[30px] ' src={vsimg} alt="" />
                    <h1 className='text-2xl font-semibold'>Visual Studio Code</h1>
                </div>
                <ul className='flex gap-10'>
                    <li className='font-semibold'>Docs</li>
                    <li className='font-semibold'>Updates</li>
                    <li className='font-semibold'>Blog</li>
                    <li className='font-semibold'>API</li>
                    <li className='font-semibold'>Extensions</li>
                    <li className='font-semibold'>FAQ</li>
                    <li className='font-semibold'>MCP</li>
                </ul>
            </div>
            <div className=" flex justify-center items-center gap-3">
                <div className="">
                    <img className='w-[25px] cursor-pointer' src={Tgimg} alt="" />
                </div>
                <div className="flex items-center border  rounded-md pl-2">
                    <input className=' relative pl-4 outline-none' type="text" placeholder='Search docs' />
                    <img className='w-[15px] absolute' src={searchimg} alt="" />
                </div>
                <div className="flex items-center">
                    <button className='bg-blue-600 cursor-pointer pt-2 pb-2 pl-4 pr-4 rounded-md text-white'>Download</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar