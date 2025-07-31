
import pyimg from '../assets/py.png'
import Tyimg from "../assets/Ty.png"
import javaimg from "../assets/javascript.png"
import cimg from "../assets/c++.png"
import cdimg from "../assets/dc.png"
import GITimg from "../assets/Git.gif"
import Mimg from "../assets/M.png"
import jimg from "../assets/j.png"


function LangItem({langImages}) {
  return (
    <>
    {langImages.map((lang,index)=>(
    <div key={index} className="flex  gap-5">
        <img className='w-[25px]' src={lang.src} alt="" />
        <p className=' font-semibold'>{lang.alt}</p>
    </div>
    ))}
    
    
    </>
  )
}

export default LangItem