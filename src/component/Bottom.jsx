import React from 'react'
import bimg from "../assets/b.png"
import ximg from "../assets/x.png"
import GITimg from "../assets/Git.gif"
import Yimg from "../assets/y.png"

function Bottom() {
  return (
    <div className='w-[1300px] mt-[80px]'>
        <div className="flex justify-between ">
            <div className="flex flex-col gap-3">
                <div className="flex gap-5">
                    <a href="https://x.com/mahto_sint35616">
                    <img  className='w-[25px] cursor-pointer' src={ximg} alt="" />
                    </a>
                    <a href="https://github.com/Codersintu">
                    <img className='w-[25px] cursor-pointer' src={GITimg} alt="" />
                    </a>
                    <a href="https://www.youtube.com/@sintumahto9199">
                    <img className='w-[25px] cursor-pointer' src={Yimg} alt="" /></a>
                    
                </div>
                <div className="flex gap-4">
                    <p className='text-gray-600 text-xm'>Support</p>
                    <p className='text-gray-600 text-xm'>Privacy</p>
                    <p className='text-gray-600 text-xm'>Terms of use</p>
                    <p className='text-gray-600 text-xm'>License</p>
                </div>
            </div>
            <div className="">
                <a href="https://www.microsoft.com/en-in/"> <img className='w-[25px] cursor-pointer' src={bimg} alt="" /></a>
               
            </div>
        </div>
    </div>
  )
}

export default Bottom