
import './App.css'
import Navbar from './component/Navbar'
import Home from './Home'
import Video from './component/Video'
import Carditem from './component/Carditem'
import Info from './component/Info'
import InfoItem from './component/InfoItem'

function App() {
  return (
    <div className="">
     <Navbar/>
    <div className="w-[100vw] overflow-x-hidden flex flex-col justify-center items-center">
    <Home/>
    <Video/>
   <Carditem/>
   <Info/>
   <InfoItem/>
    </div>
    </div>
  )
}

export default App
