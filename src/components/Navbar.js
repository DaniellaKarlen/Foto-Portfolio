import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

      
        <nav>
          <Link to="/" className="logo">Fotoportfolio</Link>
            <ul>
                <Link to="/gallery">Gallery</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                
            </ul>
            <button> Dark Mode </button>
        </nav>
    
  )
}
export default Navbar