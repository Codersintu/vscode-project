
import vsimg from "../assets/vs.png"
import Tgimg from "../assets/toggle.png"
import searchimg from "../assets/search.png"
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='sticky top-0 z-[999] w-full shadow-2xs h-[70px]  border-b border-b-gray-300 bg-white'>
        <div className=" w-full h-full  flex justify-around items-center">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-4">
                    <img className='w-full max-w-[30px] ' src={vsimg} alt="" />
                    <h1  className='text-2xl font-semibold'>Visual Studio Code</h1>
                </div>
                <ul className='hidden lg:flex gap-10'>
                    <li className='font-semibold'>Docs</li>
                    <li className='font-semibold'>Updates</li>
                    <li className='font-semibold'>Blog</li>
                    <li className='font-semibold'>API</li>
                    <li className='font-semibold'>Extensions</li>
                    <li className='font-semibold'>FAQ</li>
                    <li className='font-semibold'>MCP</li>
                </ul>
            </div>
            <div className="hidden  lg:flex justify-center items-center gap-3">
                <div className="">
                    <img className='w-full max-w-[25px] cursor-pointer' src={Tgimg} alt="" />
                </div>
                <div className="flex items-center border  rounded-md pl-2">
                    <input className=' relative pl-4 outline-none' type="text" placeholder='Search docs' />
                    <img className='w-full max-w-[15px] absolute' src={searchimg} alt="" />
                </div>
                <div className="flex items-center">
                    <button className='bg-blue-600 cursor-pointer pt-2 pb-2 pl-4 pr-4 rounded-md text-white'>Download</button>
                </div>
            </div>
            <div className="lg:hidden relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          {menuOpen && (
        <div className="lg:hidden ml-4 w-full mt-75 bg-white px-4 flex flex-col absolute">
          <ul className="flex flex-col gap-2 text-sm font-semibold">
            <li>Docs</li>
            <li>Updates</li>
            <li>Blog</li>
            <li>API</li>
            <li>Extensions</li>
            <li>FAQ</li>
            <li>MCP</li>
          </ul>
          <div className="flex items-center gap-6">
                <div className="flex items-center">
                    <img className='w-full max-w-[25px] cursor-pointer' src={Tgimg} alt="" />
                </div>
                <div className="flex items-center">
                    <img className='w-full max-w-[25px] absolute' src={searchimg} alt="" />
                </div>
                <div className="flex items-center ml-4">
                    <button className='bg-blue-600 cursor-pointer pt-2 pb-2 pl-4 pr-4 rounded-md text-white'>Download</button>
                </div>
          </div>
        </div>
      )}
        </div>
    </div>
  )
}

export default Navbar