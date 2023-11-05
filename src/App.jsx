import Navbar from  './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'
import './App.css'
import Slider from './Components/Slider/Slider';
import Portfolio from './Components/Portfolio/Portfolio'
import Project from './Components/Projects/Project';
import Pricing from './Components/Pricing/Pricing';
import Testimoanials from './Components/Testimoanials/Testimoanials';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    
    <div className="main">
      <div id="bg-effect" className='div1'></div>
    <div id="bg-effect" className='div2'></div>
    <div id="bg-effect" className='div3'></div>
    <div id="bg-effect" className='div4'></div>
    <div id="bg-effect" className='div5'></div>
    <div id="bg-effect" className='div6'></div>
    <div id="bg-effect" className='div7'></div>
    <div id="bg-effect" className='div8'></div>
    <div id="bg-effect" className='div9'></div>
    <Navbar/>
    <Hero/>
    <Slider/>
    <Portfolio/>
    <Project/>
    <Pricing/>
    <Testimoanials/>
    <Footer/>
    {/* Cursor , more shadows, */}
    </div>
    
  )
}

export default App
