
import Smallcard from './Smallcard'

function Extension() {
  return (
    <div className="w-[1300px] mt-[70px]">
         <div className="flex justify-around items-center">
            <div className="flex-1/4 flex flex-col gap-4">
              <h1 className='text-3xl font-semibold'>Code with extensions</h1>
              <p className='mr-[130px] text-gray-600'>Customize VS Code with AI-powered functionality from extensions and Model Context Protocol servers to use in Chat. Or, <span className='underline text-blue-700'>build your own extension</span> to power your team's unique scenarios.</p>
            </div>
            <div className="flex-1/2 flex flex-col justify-center items-center">
              <div className="grid grid-cols-3 gap-4 ">
                <Smallcard/>
              </div>
              <p className='text-xs font-semibold mt-7'>View 75k+ extensions in the <span className='underline text-blue-800'> Extension Marketplace</span></p>
            </div>
         </div>
        </div>
  )
}

export default Extension