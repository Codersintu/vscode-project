

function Smallcard({langImages}) {

  return (
    <>
     {langImages.map((lang,index)=>(
      <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        
         <div key={index} className="flex justify-center items-center gap-3">
           <img className='md:mb-4 ' src={lang.src} alt="" />
           <div className="hidden md:flex flex-col gap-1">
               <h1 className='text-xl font-semibold'>{lang.alt}</h1>
               <p className='text-gray-500 text-sm'>Adds rich language support for {lang.alt}</p>
           </div>
      </div>
    </div>  
              ))}
     
   </>
  )
}

export default Smallcard