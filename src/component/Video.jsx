import React from 'react'
import videop from "../assets/video1.mp4"
function Video() {
  return (
    <div className="w-[1100px] mt-[80px]">
      <video className='w-[100%]' src={videop} autoPlay muted loop playsInline />
    </div>
  )
}

export default Video