import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

      
        <nav>
          <NavLink to="/" className="logo">Fotoportfolio</NavLink>
            <ul>
                <NavLink to="/gallery" end>Gallery</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
                
            </ul>
            <button> Dark Mode </button>
        </nav>
    
  )
}
export default Navbar