import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar overlay">
        <h1>
          <Link to="/"><i className="fas fa-code"></i> Crypto Bank </Link>
        </h1>
        <ul>
          <li><Link to="/viewCustomers"> View Customers</Link></li>
          <li><Link to="/history"> History  </Link></li>
        </ul>
      </nav>
    )
}

export default Navbar;
