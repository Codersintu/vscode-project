
import LangItem from './LangItem'
import pyimg from '../assets/py.png'
import Tyimg from "../assets/Ty.png"
import javaimg from "../assets/javascript.png"
import cimg from "../assets/c++.png"
import cdimg from "../assets/dc.png"
import GITimg from "../assets/Git.gif"
import Mimg from "../assets/M.png"
import jimg from "../assets/j.png"
const langImages = [
  { src: pyimg, alt: "Python" },
  { src: Tyimg, alt: "TypeScript" },
  { src: javaimg, alt: "JavaScript" },
  { src: cimg, alt: "C++" },
  { src: cdimg, alt: "Data Structures" },
  { src: GITimg, alt: "GitHub" },
  { src: Mimg, alt: "MongoDB" },
  { src: jimg, alt: "Java" },
   { src: GITimg, alt: "GitHub" },
   { src: cdimg, alt: "Data Structures" },
];
function Language() {
  return (
   <div className="w-full max-w-[1300px] mt-[70px] px-5 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
           <div className="flex-1/4 flex flex-col gap-4">
             <h1 className='text-3xl font-semibold'>Code in any language</h1>
             <p className='mr-[130px] text-gray-600'>VS Code supports almost every major programming language. Several ship in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace.</p>
           </div>
           <div className="flex-1/2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10 px-5 py-5">
                <LangItem langImages={langImages}/>
              </div>
           </div>
        </div>
       </div>
  )
}

export default Language