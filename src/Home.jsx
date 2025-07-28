
import windowimg from "./assets/window.png"

function Home() {
  return (
    <div className=' w-[1100px] h-[100%] flex justify-center items-center '>
       <div className=" w-[600px] flex flex-col justify-center items-center gap-15">
        <div className="flex flex-col justify-center items-center gap-6">
            <h1 className='text-7xl font-bold'>The open source </h1>
            <h1 className='text-7xl font-bold'>AI code editor</h1>
        </div>
        <div className="w-[350px] h-[140px] gap-4 bg-slate-100 rounded-md flex flex-col justify-center items-center">
            <div className="flex justify-center items-center w-[90%]">
            <button className='flex w-[100%] justify-center items-center gap-3 bg-black rounded-2xl pl-5 pr-5 pt-3 pb-3 cursor-pointer font-bold'><img className='invert w-[25px]' src={windowimg} alt="" /> <h1 className='text-white'>Download for Windows</h1></button>
           </div>
          <div className="flex justify-center items-center">
            <a className='underline text-xs font-medium'>web,</a>
            <a className='underline text-xs mr-1 font-medium'>Insiders edition,</a>
            <p className='text-xs'>or</p>
            <a className='underline text-xs ml-1 font-medium'>other platforms</a>
          </div>
          <div className="">
            <p className='text-xs'>By using VS Code, you agree to its <a className='underline'>license</a> and <a className='underline'>privacy statement</a></p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Home;