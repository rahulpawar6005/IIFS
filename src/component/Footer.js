import React from 'react'
import {Link} from'react-router-dom'
const Footer = () => {
  return (
    <>
       {/* <!-- Footer --> */}
       <footer
        className="text-center text-lg-start text-white mt-5"
        style={{backgroundColor: '#1c2331'}}
      >
        <section
          className="d-flex justify-content-between p-4"
          style={{backgroundColor: '#6351ce'}}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="social-icons">
            <Link
              to=""
              className="text-white me-4"
              data-toggle="tooltip"
              data-placement="top"
              title="facebook"
            >
              <i className="ri-facebook-circle-fill"></i>
            </Link>
            <Link
              to=""
              className="text-white me-4"
              data-toggle="tooltip"
              data-placement="top"
              title="Twitter"
            >
              <i className="ri-twitter-fill"></i>
            </Link>
            <Link
              to=""
              className="text-white me-4"
              data-toggle="tooltip"
              data-placement="top"
              title="Google"
            >
              <i className="ri-google-fill"></i>
            </Link>
            <Link
              to=""
              className="text-white me-4"
              data-toggle="tooltip"
              data-placement="top"
              title="Instagram"
            >
              <i className="ri-instagram-fill"></i>
            </Link>
            <Link
              to=""
              className="text-white me-4"
              data-toggle="tooltip"
              data-placement="top"
              title="Linkedin"
            >
              <i className="ri-linkedin-box-fill"></i>
            </Link>
            <Link
              to=""
              className="text-white me-4"
              data-toggle="tooltip"
              data-placement="top"
              title="Github"
            >
              <i className="ri-github-fill"></i>
            </Link>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <Link
                  className="navbar-brand logo-footer mb-4 mt-0 d-inline-block mx-auto"
                  to="/"
                >
                  IIFS
                </Link>
                <br></br>

                {/* <!-- <h6 className="text-uppercase fw-bold"></h6> --> */}

                {/* <!-- <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
              /> --> */}
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                <h6 className="text-uppercase fw-bold">Links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
                <p>
                  <small>
                    <strong>
                      <Link to="/" className="text-white footer-link">
                        Home
                      </Link>
                    </strong>
                  </small>{" "}
                </p>
                <p>
                  <small>
                    <strong>
                      <Link to="/about" className="text-white footer-link">
                        About
                      </Link>
                    </strong>
                  </small>{" "}
                </p>
                <p>
                  <small>
                    <strong>
                      <Link to="/services" className="text-white footer-link">
                        Services
                      </Link>
                    </strong>
                  </small>{" "}
                </p>
                <p>
                  <small>
                    <strong>
                      <Link to="/testimonial" className="text-white footer-link">
                        Testimonial
                      </Link>
                    </strong>
                  </small>{" "}
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">
                  <Link
                    style={{textDecoration: 'none' ,color: '#fff'}}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
                <p>
                  <i className="ri-home-4-fill"></i> NRK business park,vijay
                  nagar,indore,mp{" "}
                </p>
                <p>
                  <i className="ri-mail-unread-line"></i>{" "}
                  contact@InfiniteInfotech,<br></br>Solution.com
                </p>
                {/* <!-- <p><i className="fas fa-phone mr-3"></i> + 01 234 567 89</p> --> */}
                <p>
                  <i className="ri-contacts-book-2-fill"></i> + 91 7583875774
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
        >
          © 2023 Copyright:
          <Link className="text-white" to="#">
            InfiniteInfotechSolution.com
          </Link>
        </div>
      </footer></>
  )
}

export default Footer