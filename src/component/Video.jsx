
import videop from "../assets/video1.mp4"
function Video() {
  return (
    <div className="w-full max-w-[1100px] mt-[80px] flex justify-center items-center ">
      <video className='w-full max-w-[90%]' src={videop} autoPlay muted loop playsInline />
    </div>
  )
}

export default Video