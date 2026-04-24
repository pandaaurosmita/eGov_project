import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top glass py-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-baseline" href="#">
          <span className="logo-e text-warning fw-bold">e</span>
          <span className="logo-gov text-primary fw-bold">GOV</span>
          <span className="logo-sub ms-1 text-uppercase small text-muted" style={{fontSize: '0.65rem'}}>foundation</span>
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#partner">Partner With Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resources">Resources</a>
            </li>
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link text-muted p-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <button className="btn btn-primary rounded-pill px-4 fw-bold">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
