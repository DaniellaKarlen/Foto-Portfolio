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




import { useState, useEffect } from 'react';

const apiKey = "rO5wy1MyCnvw7QkFSIX0FdsKbvqByttjZIWBA5aXwyD94enoJcqAameR"
const url = "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"

function App() {
  const [images, setImages] = useState([]);

  const FetchData = () => {

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const images = await response.json();

        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }, []);
  }

  FetchData();
  
  return (
    <>
    < Navbar />
    <div className='container'>
      <Routes>
        < Route path="/" element={<Home />} />
        
        <Route path="/gallery" element={<Gallery />}>
          <Route path="/gallery/landscape" element={<Landscape />} />
          <Route path="/gallery/portraits" element={<Portraits />} />
          <Route path="/gallery/buildings" element={<Buildings />} />
        </Route>
        
       < Route path="/about" element={<About />} />
        < Route path="/contact" element={<Contact />} />
        < Route path="/faq" element={<Faq />} />
      </Routes>
      

        
    </div>
    </>
  )
}

export default App;
