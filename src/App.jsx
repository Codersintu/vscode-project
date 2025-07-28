
import './App.css'
import Navbar from './component/Navbar'
import Home from './Home'
import Video from './component/Video'
import Carditem from './Carditem'

function App() {
  return (
    <div className="">
     <Navbar/>
    <div className="w-[100vw] overflow-x-hidden flex flex-col justify-center items-center">
    <Home/>
    <Video/>
   <Carditem/>
    </div>
    </div>
  )
}

export default App
