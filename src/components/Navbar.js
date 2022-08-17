/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import isAuth, { userType } from "../lib/isAuth";
import { logout } from "../utils/logout.util";

const Navbar = (props) => {
  let navigate = useNavigate();
  const logoutUser = () => {
    logout();
    navigate("/register");
  };
  return (
    <div>
      {/* {isAuth() ? (
        userType() === "applicant" ? (
          <></>
        ) : (
          <div> */}
      {/* <!-- Start Topbar Area --> */}
      <div class="topbar-area">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-6">
              <ul class="topbar-social-list">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="flaticon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i class="flaticon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i class="flaticon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/" target="_blank">
                    <i class="flaticon-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-7 col-md-6">
              <ul class="topbar-action">
                {isAuth() ? (
                  userType() === "recruiter" ? (
                    <>
                      <li>
                        <a href="profile-authentication.html">
                          <i class="flaticon-padlock"></i> Job Provider
                        </a>
                      </li>

                      <li>
                        <a onClick={logoutUser}>
                          <i class="flaticon-user"></i> Log Out
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <a href="profile-authentication.html">
                          <i class="flaticon-padlock"></i> User
                        </a>
                      </li>
                      <li>
                        <a onClick={logoutUser}>
                          <i class="flaticon-user"></i> Log Out
                        </a>
                      </li>
                    </>
                  )
                ) : (
                  <>
                    <li>
                      <a href="profile-authentication.html">
                        <i class="flaticon-padlock"></i> Job Provider
                      </a>
                    </li>

                    <li>
                      <a href="register">
                        <i class="flaticon-user"></i> Log In
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Topbar Area --> */}
      {/* <!-- Start Navbar Area --> */}
      <div class="navbar-area">
        <div class="main-responsive-nav">
          <div class="container">
            <div class="main-responsive-menu">
              <div class="logo">
                <a href="welcome.html">
                  <img src="assets/images/logo.png" alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="main-navbar">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-md navbar-light">
              <a class="navbar-brand" href="index.html">
                <img src="assets/images/logo.png" alt="logo" />
              </a>

              <div
                class="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav m-auto">
                  <li class="nav-item">
                    <a
                      onClick={() => navigate("/welcome")}
                      class="nav-link active"
                    >
                      Home
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Jobs
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      About Us
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Blog
                      <i class="ri-arrow-down-s-line"></i>
                    </a>

                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a href="blog.html" class="nav-link">
                          Blog
                        </a>
                      </li>

                      <li class="nav-item">
                        <a href="blog-right-sidebar.html" class="nav-link">
                          Blog Right Sidebar
                        </a>
                      </li>

                      <li class="nav-item">
                        <a href="blog-details.html" class="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="contact.html" class="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>

                <div class="others-options d-flex align-items-center">
                  <div class="option-item">
                    <a href="dashboard-post-job.html" class="default-btn">
                      Post A Job <i class="flaticon-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- End Navbar Area --> */}
      {/* </div>
        )
      ) : null} */}
      <Outlet />
    </div>
  );
};

export default Navbar;
