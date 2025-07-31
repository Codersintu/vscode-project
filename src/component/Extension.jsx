
import Smallcard from './Smallcard'
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
  { src: GITimg, alt: "Git" },
  { src: Mimg, alt: "MongoDB" },
  { src: jimg, alt: "Java" },
   { src: GITimg, alt: "Git" },
];

function Extension() {

  return (
    <div className="w-full max-w-[1300px] mt-[70px] px-4">
         <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="flex-1/4 flex flex-col gap-4">
              <h1 className='text-3xl font-semibold'>Code with extensions</h1>
              <p className='mr-[130px] text-gray-600'>Customize VS Code with AI-powered functionality from extensions and Model Context Protocol servers to use in Chat. Or, <span className='underline text-blue-700'>build your own extension</span> to power your team's unique scenarios.</p>
            </div>
            <div className="flex-1/2 flex flex-col justify-center items-center">
              <div className="grid grid-cols-3 gap-4 ">
                <Smallcard langImages={langImages}/>
              </div>
              <p className='text-xs font-semibold mt-7'>View 75k+ extensions in the <span className='underline text-blue-800'> Extension Marketplace</span></p>
            </div>
         </div>
        </div>
  )
}

export default Extension