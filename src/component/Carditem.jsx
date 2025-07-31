import React from 'react'
import Card from "./Card"

function Carditem() {
  return (
     <div className="w-full px-4 md:px-0 max-w-[1200px] flex flex-col justify-center items-center md:flex-row gap-6 mt-[80px]">
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Carditem