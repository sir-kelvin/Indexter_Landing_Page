import React from 'react';
import { FaBars, FaArrowRight } from 'react-icons/fa';
import heroImg from '../assets/why-us.png';

const Header = () => {
  return (
    <>
      {/* NAVIGATION */}
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top"
        style={{
          background: '#13274F',
        }}
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            Indexter
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
          >
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ms-auto my-2 my-md-2">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#pricings" className="nav-link">
                  Pricings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* END OF NAVIGATION */}
      {/* HERO SECTION */}
      <section id="home" className="container ">
        <div className="row min-vh-100 align-items-center">
          <div className="col-md-6 order-1 order-md-0">
            <h1 className="fw-bold pb-3">
              We offer modern solutions for growing your business
            </h1>
            <h4 className="fs-4 pb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              minima!
            </h4>
            <a
              href="#about"
              className="btn btn-lg"
              style={{
                background: '#13274F',
                color: 'white',
              }}
            >
              Get Started
              <FaArrowRight
                className="ms-2"
                style={{
                  fontSize: '12px',
                }}
              />
            </a>
          </div>
          <div className="col-md-6">
            <img src={heroImg} alt="hero image" className="img-fluid" />
          </div>
        </div>
      </section>
      {/* END OF HERO SECTION */}
      <div className="container my-5"></div>
    </>
  );
};

export default Header;
