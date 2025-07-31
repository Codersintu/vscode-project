
import gitimg from '../assets/git.png'

function InfoItem() {
  return (
    <div className="w-full max-w-[1300px] mt-[70px] px-4">
     <div className="flex flex-col md:flex-row gap-4 justify-around items-center">
        <div className="flex-1/4 flex flex-col gap-3">
          <h1 className='text-3xl font-semibold'>Next edit suggestions</h1>
          <p className='mr-[130px] text-gray-600'>VS Code predicts your next move as you code. Use the Tab key to accept AI-powered suggestions right in your editor. It intelligently recommends what to change — and where — based on the edits you're already making.</p>
          <p className='underline text-blue-800 cursor-pointer'>Code with AI-powered suggestions</p>
        </div>
        <div className="flex-1/2">
          <img src={gitimg} alt="" />
        </div>
     </div>
    </div>
  )
}

export default InfoItem