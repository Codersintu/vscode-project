
import windowimg from "./assets/window.png"

function Home() {
  return (
    <div className="w-full overflow-x-hidden flex justify-center items-center px-4">
      <div className="w-full max-w-[600px] flex flex-col justify-center items-center gap-10">
        
        {/* Headings */}
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">The open source</h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">AI code editor</h1>
        </div>

        {/* Download Section */}
        <div className="w-full max-w-[350px] bg-slate-100 rounded-md flex flex-col justify-center items-center gap-3 px-4 py-5">
          
          <div className="w-full">
            <button className="w-full flex justify-center items-center gap-3 bg-black rounded-2xl px-5 py-3 font-bold">
              <img className="invert w-6" src={windowimg} alt="windows" />
              <span className="text-white">Download for Windows</span>
            </button>
          </div>
          
          <div className="text-xs font-medium flex flex-wrap justify-center items-center gap-1 text-center">
            <a className="underline">web,</a>
            <a className="underline">Insiders edition,</a>
            <span>or</span>
            <a className="underline">other platforms</a>
          </div>

          <p className="text-xs text-center">
            By using VS Code, you agree to its <a className="underline">license</a> and <a className="underline">privacy statement</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;