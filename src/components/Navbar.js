import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

      
        <nav>
          <Link to="/" className="logo">Fotoportfolio</Link>
            <ul>
                <Link to="/Home">Home</Link> 
                <Link to="/Gallery">Gallery</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                
            </ul>
            <button> Dark Mode </button>
        </nav>
    
  )
}
export default Navbar