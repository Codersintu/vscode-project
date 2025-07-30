
import pyimg from '../assets/py.png'
import Tyimg from "../assets/Ty.png"
import javaimg from "../assets/java.png"
import cimg from "../assets/c++.png"
import cdimg from "../assets/dc.png"
import GITimg from "../assets/Git.gif"
import Mimg from "../assets/M.png"
import jimg from "../assets/j.png"


function LangItem() {
  return (
    <>
    <div className="flex justify-center items-center gap-5">
        <img className='w-[25px]' src={javaimg} alt="" />
        <p className=' font-semibold'>Javascript</p>
    </div>
    <div className="flex justify-center items-center gap-5">
        <img className='w-[25px]' src={Tyimg} alt="" />
        <p className=' font-semibold'>Typescript</p>
    </div>
    <div className="flex justify-center items-center gap-5">
        <img className='w-[25px]' src={pyimg} alt="" />
        <p className=' font-semibold'>Python</p>
    </div>
    <div className="flex justify-center gap-5 mr-10">
        <img className='w-[25px]' src={cimg} alt="" />
        <p className=' font-semibold'>C#</p>
    </div>
    <div className="flex justify-center items-center mr-10 gap-5">
        <img className='w-[25px]' src={cdimg} alt="" />
        <p className=' font-semibold'>C++</p>
    </div>
    <div className="flex justify-center items-center gap-5">
        <img className='w-[25px]' src={GITimg} alt="" />
        <p className=' font-semibold'>Github</p>
    </div>
    <div className="flex justify-center items-center gap-5">
        <img className='w-[25px]' src={pyimg} alt="" />
        <p className=' font-semibold'>Python</p>
    </div>
    <div className="flex justify-center items-center gap-5">
        <img className='w-[25px]' src={Mimg} alt="" />
        <p className=' font-semibold'>MongoDB</p>
    </div>
    <div className="flex justify-center items-center gap-5">
        <img className='w-[25px]' src={jimg} alt="" />
        <p className=' font-semibold'>Jupyter</p>
    </div>
    <div className="flex justify-center items-center gap-5">
        <img className='w-[25px]' src={javaimg} alt="" />
        <p className=' font-semibold'>Javascript</p>
    </div>
    <div className="flex justify-center items-center gap-5">
        <img className='w-[25px]' src={pyimg} alt="" />
        <p className=' font-semibold'>Python</p>
    </div>
    <div className="flex justify-center items-center gap-5">
        <img className='w-[25px]' src={pyimg} alt="" />
        <p className=' font-semibold'>Python</p>
    </div>
    </>
  )
}

export default LangItem