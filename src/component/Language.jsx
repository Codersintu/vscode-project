
import LangItem from './LangItem'

function Language() {
  return (
   <div className="w-[1300px] mt-[70px] mb-10">
        <div className="flex justify-around items-center">
           <div className="flex-1/4 flex flex-col gap-4">
             <h1 className='text-3xl font-semibold'>Code in any language</h1>
             <p className='mr-[130px] text-gray-600'>VS Code supports almost every major programming language. Several ship in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace.</p>
           </div>
           <div className="flex-1/2">
              <div className="grid grid-cols-3 gap-10">
                <LangItem/>
              </div>
           </div>
        </div>
       </div>
  )
}

export default Language