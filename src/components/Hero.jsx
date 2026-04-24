import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero py-5 mt-5">
      <div className="container">
        <div className="row align-items-center gx-lg-5">
          <div className="col-lg-6 mb-5 mb-lg-0 fade-in">
            <span className="badge rounded-pill bg-light text-primary mb-3 px-3 py-2 fw-bold text-uppercase" style={{letterSpacing: '1px'}}>
              20 Years of Impact
            </span>
            <h1 className="display-3 fw-bold mb-4 text-dark">
              Digital transformation in public service delivery.
              <span className="text-primary d-block">It's possible.</span>
            </h1>
            <p className="lead text-muted mb-5">
              We partner with governments to build digital infrastructure that improves 
              the lives of billions. Open source, scalable, and citizen-centric.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm">Our Solutions</button>
              <button className="btn btn-outline-primary btn-lg rounded-pill px-5 fw-bold">Watch Story</button>
            </div>
          </div>
          <div className="col-lg-6 position-relative ps-lg-4">
            <div className="blob-bg position-absolute top-0 start-0 w-100 h-100 opacity-25"></div>
            <img src="assets/prod4.png" alt="Digital Impact" className="img-fluid rounded-4 shadow-lg position-relative z-1" />
            
            <div className="card position-absolute shadow border-0 p-3 d-none d-md-block" style={{bottom: '5%', left: '0%', zIndex: 10}}>
              <h4 className="h2 fw-bold text-primary mb-0">1B+</h4>
              <p className="small fw-bold text-muted mb-0">Lives Impacted</p>
            </div>
            
            <div className="card position-absolute shadow border-0 p-3 d-none d-md-block" style={{top: '5%', right: '0%', zIndex: 10}}>
              <h4 className="h2 fw-bold text-primary mb-0">50+</h4>
              <p className="small fw-bold text-muted mb-0">Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
