import React from 'react'
import About from './Components/About';
import Developer from './Components/Developer';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Subscribe from './Components/Subscribe';

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Developer/>
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
