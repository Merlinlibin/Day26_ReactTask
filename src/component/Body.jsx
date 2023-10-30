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

        <nav class="navbar navbar-expand-lg  ">
          <div class="container-fluid menu">
            <h4 className="navbar-toggler mx-2 border-0 Bold text ">
              Blog Catrgory
            </h4>
            <button
              class="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="navbutton">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav  mb-2 mb-lg-0  ">
                <li class="nav-item text-center">
                  <Link
                    className="px-lg-3 px-sm-1 links hover-underline-animation nav-link"
                    to="/"
                    id="All">
                    All
                  </Link>
                </li>
                <li class="nav-item text-center">
                  <Link
                    className="px-lg-3 px-sm-1 links hover-underline-animation nav-link"
                    to="/full-stack-development/"
                    id="Fullstack">
                    FULL STACK DEVELOPMENT
                  </Link>
                </li>
                <li class="nav-item text-center">
                  <Link
                    className="px-lg-3 px-sm-1 links hover-underline-animation nav-link"
                    to="/data-science/"
                    id="Datascience">
                    DATA SCIENCE
                  </Link>
                </li>
                <li class="nav-item text-center">
                  <Link
                    className="px-lg-3 px-sm-1 links hover-underline-animation nav-link"
                    to="/cyber-security/"
                    id="Cybersecurity">
                    CYBER SECURITY
                  </Link>
                </li>
                <li class="nav-item text-center">
                  <Link
                    className="px-lg-3 px-sm-1 links hover-underline-animation nav-link"
                    to="/career/">
                    CAREER
                  </Link>
                </li>
              </ul>
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
