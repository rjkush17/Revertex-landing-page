import Navbar from  './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'
import './App.css'
import Slider from './Components/Slider/Slider';
import Portfolio from './Components/Portfolio/Portfolio'
import Project from './Components/Projects/Project';

function App() {

  return (
    
    <div className="main">
      <div id="bg-effect" className='div1'></div>
    <div id="bg-effect" className='div2'></div>

    <Navbar/>
    <Hero/>
    <Slider/>
    <Portfolio/>
    <Project/>
    {/* Cursor , */}
    </div>
    
  )
}

export default App
