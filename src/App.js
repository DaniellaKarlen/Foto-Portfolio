import './App.css';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Gallery from './components/pages/Gallery.js';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Home from './components/pages/Home.js';
import Landscape from './components/pages/Landscape.js';
import Portraits from './components/pages/Portraits.js'
import Buildings from './components/pages/Buildings.js';
import Faq from './components/pages/Faq';
import { createClient } from 'pexels';


import { useState, useEffect } from 'react';

const apiKey = "rO5wy1MyCnvw7QkFSIX0FdsKbvqByttjZIWBA5aXwyD94enoJcqAameR"
const url = `https://api.pexels.com/vi/collections${apiKey}`



const client = createClient('rO5wy1MyCnvw7QkFSIX0FdsKbvqByttjZIWBA5aXwyD94enoJcqAameR');

client.collections.all({ per_page: 3 }).then(collections => {
  console.log(collections)

  


  

});


function App() {
// const [images, setImages] = useState([]);

//   const FetchData = () => {

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch(url);
//           const images = await response.json();
//           console.log(images);

//         } catch (error) {
//           console.log(error);
//         }
//       }
//       fetchData();
//     }, []);
//   }

//   FetchData();
  
  return(
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
