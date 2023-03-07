import React from 'react'
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/Navbar';
import Service from './components/service/Service';
import WhysUs from './components/why/WhysUs';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhysUs />
      <About />
      <Service/>
      <Work />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
