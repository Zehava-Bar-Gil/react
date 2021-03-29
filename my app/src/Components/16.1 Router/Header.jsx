import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
    const navStyle ={
        color: 'white'
    };

  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link style={navStyle} to="/homepage">
            <li>Homepage</li>
          </Link>
          <Link to="/products" style={navStyle}>
            <li>Products</li>
          </Link>  
        </ul>
    </nav>
  );
}

export default Header;