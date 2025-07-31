

function Info() {
  return (

    <div className='w-[95%] rounded  mb-7 max-w-[1300px] mx-auto h-auto  md:h-[220px] mt-[70px] bg-gradient-to-r from-[#d1ecd3] via-[#f7f8ff] to-[#bcc7f9]'>
     <div className="flex flex-col md:flex-row justify-around items-center h-full py-8 gap-4 md:gap-0 ">
            <h1 className='text-2xl font-semibold text-center md:text:left'>Use AI features in VS Code for free</h1>
        <div className="flex flex-col text-center justify-center items-center">
            <p className='font-medium'>No trial. No credit card required. Just your GitHub account.</p>
            <button className='mt-3 border rounded p-2 cursor-pointer bg-gray-100'>Try free</button>
        </div>
     </div>
    </div>
  )
}

export default Info