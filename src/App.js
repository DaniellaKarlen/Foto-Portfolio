import './App.css';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Gallery from './components/pages/Gallery.js';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Home from './components/pages/Home.js';
import Landscape from './components/pages/subPages/Landscape.js';
import Portraits from './components/pages/subPages/Portraits.js'
import Buildings from './components/pages/subPages/Buildings.js';
import Faq from './components/pages/Faq';



function App() {
  
  return(
    <>
    <div className='container'>
      <Routes>
        < Route path="/" element={<Home />} >
        
        <Route path="/gallery" element={<Gallery />}>
          <Route path="landscape" element={<Landscape />} />
          <Route path="portraits" element={<Portraits />} />
          <Route path="buildings" element={<Buildings />} />
        </Route>
        
        < Route path="/about" element={<About />} />
        < Route path="/contact" element={<Contact />} />
        < Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </div>
  </>
)
}



export default App;
