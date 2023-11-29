import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">GORAKSHA</Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul id="main" className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li className="dropdown">
        <Link to="/cowcare">
          <span>Cow Care</span>
          </Link>
          <ul className="submenu">
            <li>
            <Link to="/cowcare/season">Winter</Link>
            </li>
            <li>
              <Link to="/cowcare/rainy">Rainy</Link>
            </li>
            <li>
              <Link to="/cowcare/summer">Summer</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/milkfacts">Milk Facts</Link>
        </li>
        <li>
          <Link to="/media">Diseases</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="login">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


