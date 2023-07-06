import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

  return (
    <footer>

        <div className="footer-nav">
        <p>Navigation:</p>
        {location.pathname === '/' && (
              <Link to="/about">About</Link>
        )}
        {location.pathname === '/about' && (
              <Link to="/">Home</Link>
        )}
      
        </div>
        
        <div className="footer-copyright">
        <p>Copyright &copy; 2023</p> 
        </div>

    </footer>
  )
}

export default Footer