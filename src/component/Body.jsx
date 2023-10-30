import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import FSD from "../component/FSD";
import All from "../component/All";
import DS from "../component/DS";
import CS from "../component/CS";
import CAR from "../component/CAR";
import FSDHead from "../component/FSDHead";
import ALLHead from "../component/ALLHead";
import DSHead from "../component/DSHead";
import CSHead from "../component/CSHead";
import CARHead from "../component/CARHead";

function Body({ datas }) {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ALLHead />} />
          <Route path="/full-stack-development/" element={<FSDHead />} />
          <Route path="/data-science/" element={<DSHead />} />
          <Route path="/cyber-security/" element={<CSHead />} />
          <Route path="/career/" element={<CARHead />} />
        </Routes>
        <div className="ruler2 mt-0 p-0"></div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <h4 className="navbar-toggler mx-2 border-0">Blog Catrgory</h4>
            <button
              className="navbar-toggler mx-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="navbutton">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse d-lg-flex align-items-center justify-content-center"
              id="navbarNavDropdown">
              <div className=" mt-1 navbar-nav">
                <Link
                  className="px-lg-3 px-sm-1 links hover-underline-animation nav-link"
                  to="/"
                  id="All">
                  All
                </Link>

                <Link
                  className="px-lg-3 px-sm-1 links hover-underline-animation nav-link"
                  to="/full-stack-development/"
                  id="Fullstack">
                  FULL STACK DEVELOPMENT
                </Link>
                <Link
                  className="px-lg-3 px-sm-1 links hover-underline-animation nav-link"
                  to="/data-science/"
                  id="Datascience">
                  DATA SCIENCE
                </Link>
                <Link
                  className="px-lg-3 px-sm-1 links hover-underline-animation nav-link"
                  to="/cyber-security/"
                  id="Cybersecurity">
                  CYBER SECURITY
                </Link>
                <Link
                  className="px-lg-3 px-sm-1 links hover-underline-animation nav-link"
                  to="/career/">
                  CAREER
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="ruler2"></div>
      </div>
      <Routes>
        <Route path="/" element={<All datas={datas} />} />
        <Route
          path="/full-stack-development/"
          element={<FSD datas={datas} />}
        />
        <Route path="/data-science/" element={<DS datas={datas} />} />
        <Route path="/cyber-security/" element={<CS datas={datas} />} />
        <Route path="/career/" element={<CAR datas={datas} />} />
      </Routes>
    </Router>
  );
}

export default Body;
