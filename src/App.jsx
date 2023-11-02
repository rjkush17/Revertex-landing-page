import Navbar from  './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'
import './App.css'
import Silder from './Components/Silder/Silder';

function App() {

  return (
    
    <div className="main">
      <div id="bg-effect" className='div1'></div>
    <div id="bg-effect" className='div2'></div>

    <Navbar/>
    <Hero/>
    <Silder/>
    </div>
    
  )
}

export default App
