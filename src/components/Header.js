import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <div className="header">
    <h1>Math Magicians</h1>
    <div className="link-container">
      <Link to="/" className="link">Home</Link>
      <Link to="/calculator" className="link">Calculator</Link>
      <Link to="/quote" className="link">Quote</Link>
    </div>
  </div>
);

export default Header;
