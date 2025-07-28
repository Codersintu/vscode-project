import { useState } from 'react'
import video from "./assets/video1.mp4"

import './App.css'
import Navbar from './component/Navbar'
import Home from './Home'

function App() {
  return (
    <>
     <Navbar/>
    <div className="w-[100vw] flex flex-col justify-center items-center z-0">
    <Home/>
    <div className="w-[1100px] mt-[80px]">
      <video className='w-[100%]' src={video} autoPlay muted loop playsInline />
    </div>

    </div>
    </>
  )
}

export default App
