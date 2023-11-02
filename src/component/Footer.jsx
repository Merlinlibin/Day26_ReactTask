import React from "react";

function Footer() {
  return (
    <div>
      <footer class=" text-lg-start bg-light text-muted pt-2">
        <section className="">
          <div className="container  text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-lg-3 col-md-12 col-sm-12 col-12 mx-auto mb-4">
                <img
                  src="https://www.guvi.in/build/images/guvi-logo.e8ad68fbd8dc0a5fc2f7c4ffd580c54d.png"
                  alt="logo"
                  className='logo'
                />
                <br />
                <hr style={{ width: "70%" }} />
                <button type="button" class="btn my-1">
                  Refer & Earn
                </button>
                <hr style={{ width: "70%" }} />
                <h5 className="my-1">Follow us on </h5>
                <div className="my-2" style={{ fontSize: "25px" }}>
                  <a href="#" className="me-4 text-reset">
                    <i
                      className="bi bi-facebook "
                      style={{ color: "#4D68A1" }}></i>
                  </a>
                  <a href="#" className="me-4 text-reset">
                    <i
                      className="bi bi-instagram"
                      style={{ color: "#F7A64C" }}></i>
                  </a>
                  <a href="#" className="me-4 text-reset">
                    <i
                      className="bi bi-linkedin"
                      style={{ color: "#1884BC" }}></i>
                  </a>
                  <a href="#" className="me-4 text-reset">
                    <i
                      className="bi bi-twitter"
                      style={{ color: "#32A9F3" }}></i>
                  </a>
                  <a href="#" className="me-4 text-reset">
                    <i
                      className="bi bi-telegram"
                      style={{ color: "#40ADE2" }}></i>
                  </a>
                  <a href="#" className="me-4 text-reset">
                    <i
                      className="bi bi-youtube"
                      style={{ color: "#D13433" }}></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12 mx-auto mb-4">
                <h5 className="" style={{ color: "black" }}>
                  Course Library
                </h5>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Premium Courses
                  </a>
                </p>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Free Library
                  </a>
                </p>
                <p className="mb-2">
                  <a href="#!" className="text-reset text-decoration-none">
                    Offers
                  </a>
                </p>

                <h5 class="" style={{ color: "black" }}>
                  ZEN CLASS Live Classes
                </h5>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Full Stack Development
                  </a>
                </p>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    IIT-M Advanced Programming & Data Science Program
                  </a>
                </p>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Automation & Testing Program
                  </a>
                </p>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 mx-auto mb-4">
                <h5 className="" style={{ color: "black" }}>
                  Practice
                </h5>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Codekata
                  </a>
                </p>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Webkata
                  </a>
                </p>
                <p className="mb-2">
                  <a href="#!" className="text-reset text-decoration-none">
                    IDE
                  </a>
                </p>

                <h5 class="" style={{ color: "black" }}>
                  Resources
                </h5>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Rewards
                  </a>
                </p>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Refer a Friend
                  </a>
                </p>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Blogs
                  </a>
                </p>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Forum Support
                  </a>
                </p>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 mx-auto mb-md-0 mb-4">
                <h5 className="" style={{ color: "black" }}>
                  Products
                </h5>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    HackerKid
                  </a>
                </p>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Guvi for Coporates
                  </a>
                </p>

                <h5 className="" style={{ color: "black" }}>
                  Company
                </h5>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Refund Policy
                  </a>
                </p>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    FAQs
                  </a>
                </p>
                <p className="m-0">
                  <a href="#!" className="text-reset text-decoration-none">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr />

        <div className="d-flex align-ietms-center justify-content-between ">
          <div className="d-flex">
            <p className="mx-3">
              <a href="#!" className="text-reset text-decoration-none">
                Terms And Consition
              </a>
            </p>
            <p className="m-0">
              <a href="#!" className="text-reset text-decoration-none">
                Privacy Policy
              </a>
            </p>
          </div>
          <p>© GUVI Geeks Network Pvt. Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
