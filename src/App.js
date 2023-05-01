import './App.css';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Gallery from './components/pages/Gallery.js';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Home from './components/pages/Home.js';
import Landscape from './components/pages/Landscape.js';


function App() {
  return (
    <>
    < Navbar />
    <div className='container'>
      <Routes>
        < Route path="/" element={<Home />} />
        
        <Route path="/gallery" element={<Gallery />}>
        <Route path="/gallery/landscape" element={<Landscape />} />
        </Route>
        
       < Route path="/about" element={<About />} />
        < Route path="/contact" element={<Contact />} />
      </Routes>
      

        
    </div>
    </>
  )
}

export default App;
