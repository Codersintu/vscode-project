
import Bigcard from './Bigcard'

function Feature() {
  return (
    <div className="w-full max-w-[1300px] mt-[70px] px-4">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className='text-3xl font-bold'>Code with rich features</h1>
          <p className='text-gray-600 text-xm'>There's a lot more to an editor. Whether it's using built-in features or rich extensions, there's something for everyone.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Bigcard/>
           <Bigcard/>
            <Bigcard/>
             <Bigcard/>
              <Bigcard/>
               <Bigcard/>
                <Bigcard/>
                 <Bigcard/>
        </div>
      </div>
    </div>
  )
}

export default Feature