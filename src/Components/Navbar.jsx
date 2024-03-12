import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#673AB7' }}>
      <div className="container d-flex align-items-center">
        <Link to="/" className={`navbar-brand d-flex align-items-center ${location.pathname === '/' ? 'active' : ''}`} style={{ color: 'white', textDecoration: 'none' }}>
        
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to="/login" style={{ color: 'white', fontSize: '16px' }}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`} to="/signup" style={{ color: 'white', fontSize: '16px' }}>SignUp</Link>
            </li>      
          </ul>         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
