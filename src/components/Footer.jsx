import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4 mb-5">
          <div className="col-lg-4">
            <div className="navbar-brand d-flex align-items-baseline mb-4" href="#">
              <span className="logo-e text-warning h3 fw-bold mb-0">e</span>
              <span className="logo-gov text-white h3 fw-bold mb-0">GOV</span>
              <span className="logo-sub ms-1 text-uppercase small text-white-50" style={{fontSize: '0.65rem'}}>foundation</span>
            </div>
            <p className="text-white-50 mb-4 pe-lg-5">Advancing digital transformation in public service delivery for over two decades.</p>
            <div className="d-flex gap-3 social-links">
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">Fb</a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">Tw</a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">Li</a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">In</a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Useful Links</h5>
            <ul className="list-unstyled footer-nav">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Home</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Our Impact</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Resources</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Support</h5>
            <ul className="list-unstyled footer-nav">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="fw-bold mb-4">Subscribe Now</h5>
            <p className="text-white-50 mb-4">Get the latest news and updates from our experts.</p>
            <div className="input-group mb-3 bg-white-10 rounded-pill p-1 overflow-hidden border border-secondary">
              <input type="email" className="form-control bg-transparent border-0 text-white placeholder-white-50" placeholder="Enter your email" />
              <button className="btn btn-warning rounded-pill px-4">➔</button>
            </div>
          </div>
        </div>
        <hr className="border-secondary mb-4" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="small text-white-50 mb-0">&copy; 2026 eGov Foundation. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="small text-white-50">
              <a href="#" className="text-white-50 me-3">Privacy Policy</a>
              <a href="#" className="text-white-50">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
