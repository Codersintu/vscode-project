import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Home from './Home'

function App() {
  return (
    <>
     <Navbar/>
    <div className="w-[100vw] h-[calc(100vh-70px)] flex flex-col justify-center items-center border">
    <Home/>
    </div>
    </>
  )
}

export default App
