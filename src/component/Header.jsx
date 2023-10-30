import React from 'react'
import  '../assets/react.svg'

function Header() {
  return (
    <div className="header">
      <div className="m-3 d-flex justify-content-between align-items-center">
        <img
          src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.svg"
          alt="logo"
        />
        <div>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                id="navbutton">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link " href="#">
                      COURSES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">
                      LIVE CLASSES <i className="bi bi-chevron-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      PRACTICE <i className="bi bi-chevron-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">
                      RESOURCES <i className="bi bi-chevron-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">
                      OUR PRODUCTS <i className="bi bi-chevron-down"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="ruler1"></div>
    </div>
  );
}

export default Header