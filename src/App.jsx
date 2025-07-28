import { useState } from 'react'
import video from "./assets/video1.mp4"

import './App.css'
import Navbar from './component/Navbar'
import Home from './Home'
import Card from './component/Card'

function App() {
  return (
    <div className="">
     <Navbar/>
    <div className="w-[100vw] overflow-x-hidden flex flex-col justify-center items-center">
    <Home/>
    <div className="w-[1100px] mt-[80px]">
      <video className='w-[100%]' src={video} autoPlay muted loop playsInline />
    </div>
    <div className="flex mt-[80px] gap-12">
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>
    </div>
  )
}

export default App
