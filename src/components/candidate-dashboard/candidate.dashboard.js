/* eslint-disable jsx-a11y/anchor-is-valid */
const CandidateDashboard = (props) => {
  return (
    <div class="main-dashboard-content d-flex flex-column">
      {/* <!-- Start Navbar Area --> */}
      <div class="navbar-area">
        <div class="main-responsive-nav">
          <div class="main-responsive-menu">
            <div class="responsive-burger-menu d-lg-none d-block">
              <span class="top-bar"></span>
              <span class="middle-bar"></span>
              <span class="bottom-bar"></span>
            </div>
          </div>
        </div>

        <div class="main-navbar">
          <nav class="navbar navbar-expand-md navbar-light">
            <div
              class="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Home
                    <i class="ri-arrow-down-s-line"></i>
                  </a>

                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a href="index.html" class="nav-link">
                        Home Demo - 1
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="index-2.html" class="nav-link">
                        Home Demo - 2
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="index-3.html" class="nav-link">
                        Home Demo - 3
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Job Listing
                    <i class="ri-arrow-down-s-line"></i>
                  </a>

                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a href="job-listing-1.html" class="nav-link">
                        Job Listing - One
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="job-listing-2.html" class="nav-link">
                        Job Listing - Two
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="job-listing-3.html" class="nav-link">
                        Job Listing - Three
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="add-listing.html" class="nav-link">
                        Add Listing
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="my-listing.html" class="nav-link">
                        My Listing
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Job Details
                        <i class="ri-arrow-right-s-line"></i>
                      </a>

                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a href="job-details-1.html" class="nav-link">
                            Job Details - One
                          </a>
                        </li>

                        <li class="nav-item">
                          <a href="job-details-2.html" class="nav-link">
                            Job Details - Two
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Candidates
                    <i class="ri-arrow-down-s-line"></i>
                  </a>

                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a href="candidates-1.html" class="nav-link">
                        Candidates - One
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="candidates-2.html" class="nav-link">
                        Candidates - Two
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="dashboard-submit-resume.html" class="nav-link">
                        Submit Resume
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="add-resume.html" class="nav-link">
                        Add Resume
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="my-resume.html" class="nav-link">
                        My Resume
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Candidates Details
                        <i class="ri-arrow-right-s-line"></i>
                      </a>

                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a href="candidates-details-1.html" class="nav-link">
                            Candidates Details - One
                          </a>
                        </li>

                        <li class="nav-item">
                          <a href="candidates-details-2.html" class="nav-link">
                            Candidates Details - Two
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="nav-item">
                      <a href="candidates-dashboard.html" class="nav-link">
                        Candidates Dashboard
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Employers
                    <i class="ri-arrow-down-s-line"></i>
                  </a>

                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a href="employers.html" class="nav-link">
                        Employers
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="employers-details.html" class="nav-link">
                        Employers Details
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="dashboard.html" class="nav-link">
                        Employers Dashboard
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Pages
                    <i class="ri-arrow-down-s-line"></i>
                  </a>

                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Shop
                        <i class="ri-arrow-right-s-line"></i>
                      </a>

                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a href="shop.html" class="nav-link">
                            Shop
                          </a>
                        </li>

                        <li class="nav-item">
                          <a href="shop-details.html" class="nav-link">
                            Shop Details
                          </a>
                        </li>

                        <li class="nav-item">
                          <a href="cart.html" class="nav-link">
                            Cart
                          </a>
                        </li>

                        <li class="nav-item">
                          <a href="checkout.html" class="nav-link">
                            Checkout
                          </a>
                        </li>

                        <li class="nav-item">
                          <a href="my-account.html" class="nav-link">
                            My Account
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="nav-item">
                      <a href="about-us.html" class="nav-link">
                        About Us
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="pricing-plan.html" class="nav-link">
                        Pricing Plan
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="gallery.html" class="nav-link">
                        Gallery
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="testimonials.html" class="nav-link">
                        Testimonials
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="faq.html" class="nav-link">
                        FAQ
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="dashboard-invoice.html" class="nav-link">
                        Invoice
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="profile-authentication.html" class="nav-link">
                        Profile Authentication
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="terms-of-service.html" class="nav-link">
                        Terms of Service
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="privacy-policy.html" class="nav-link">
                        Privacy Policy
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="error-404.html" class="nav-link">
                        404 Error
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="coming-soon.html" class="nav-link">
                        Coming Soon
                      </a>
                    </li>
                  </ul>
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
                  <div class="dropdown profile-nav-item">
                    <a
                      href="#"
                      class="dropdown-bs-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div class="menu-profile">
                        <img
                          src="assets/images/dashboard/user1.jpg"
                          class="rounded-circle"
                          alt="image"
                        />
                        <span class="name">My Account</span>
                      </div>
                    </a>

                    <div class="dropdown-menu">
                      <div class="dropdown-header d-flex flex-column align-items-center">
                        <div class="figure mb-3">
                          <img
                            src="assets/images/dashboard/user1.jpg"
                            class="rounded-circle"
                            alt="image"
                          />
                        </div>

                        <div class="info text-center">
                          <span class="name">Andy Smith</span>
                          <p class="mb-3 email">hello@androsmith.com</p>
                        </div>
                      </div>

                      <div class="dropdown-body">
                        <ul class="profile-nav p-0 pt-3">
                          <li class="nav-item active">
                            <a
                              href="candidates-dashboard.html"
                              class="nav-link"
                            >
                              <span class="icon">
                                <i class="ri-home-line"></i>
                              </span>
                              <span class="menu-title">Dashboard</span>
                            </a>
                          </li>

                          <li class="nav-item">
                            <a
                              href="dashboard-applicants.html"
                              class="nav-link"
                            >
                              <span class="icon">
                                <i class="ri-file-list-line"></i>
                              </span>
                              <span class="menu-title">All Applicants</span>
                            </a>
                          </li>

                          <li class="nav-item">
                            <a
                              href="candidates-dashboard-submit-resume.html"
                              class="nav-link"
                            >
                              <span class="icon">
                                <i class="ri-bookmark-line"></i>
                              </span>
                              <span class="menu-title">Submit Resumes</span>
                            </a>
                          </li>

                          <li class="nav-item">
                            <a href="dashboard-packages.html" class="nav-link">
                              <span class="icon">
                                <i class="ri-stack-fill"></i>
                              </span>
                              <span class="menu-title">Packages</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="dropdown-footer">
                        <ul class="profile-nav">
                          <li class="nav-item">
                            <a href="index.html" class="nav-link">
                              <i class="ri-logout-box-r-line"></i>{" "}
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- End Navbar Area --> */}

      {/* <!-- Breadcrumb Area --> */}
      <div class="breadcrumb-area">
        <h1>
          {props.userData && props.userData.name ? props.userData.name : ""}
        </h1>
        <ol class="breadcrumb">
          <li class="item">
            <a href="candidates-dashboard.html">Home</a>
          </li>
          <li class="item">Dashboard</li>
        </ol>
      </div>
      {/* <!-- End Breadcrumb Area --> */}

      {/* <!-- Start Notification Alert Area --> */}
      <div
        class="notification-alert alert alert-success alert-dismissible fade show"
        role="alert"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <button
          type="button"
          class="close"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {/* <!-- End Notification Alert Area --> */}

      {/* <!-- Start Dashboard Fun Fact Area --> */}
      <div class="dashboard-fun-fact-area">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="stats-fun-fact-box">
              <div class="icon-box">
                <i class="ri-briefcase-line"></i>
              </div>
              <span class="sub-title">Applied Jobs</span>
              <h3>300</h3>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="stats-fun-fact-box">
              <div class="icon-box">
                <i class="ri-file-list-line"></i>
              </div>
              <span class="sub-title">Job Alerts</span>
              <h3>1245</h3>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="stats-fun-fact-box">
              <div class="icon-box">
                <i class="ri-chat-2-line"></i>
              </div>
              <span class="sub-title">Messages</span>
              <h3>85</h3>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="stats-fun-fact-box">
              <div class="icon-box">
                <i class="ri-bookmark-line"></i>
              </div>
              <span class="sub-title">Shortlist</span>
              <h3>57</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Dashboard Fun Fact Area --> */}

      {/* <!-- Start Notifications and Invoices Area --> */}
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="recent-notifications-box">
            <h3>Recent Notifications</h3>

            <ul>
              <li>
                <div class="icon">
                  <i class="ri-bookmark-line"></i>
                </div>
                <span>Tyrone Lowe</span> Applied For A Job{" "}
                <strong>Software Engineer</strong>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-bookmark-line"></i>
                </div>
                <span>Kaedyn Fraser</span> Applied For A Job{" "}
                <strong>Web Developer</strong>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-bookmark-line"></i>
                </div>
                <span>Harold Adams</span> Applied For A Job{" "}
                <strong>Technical Architect</strong>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-bookmark-line"></i>
                </div>
                <span>Joshua Mcnair</span> Applied For A Job{" "}
                <strong>UI Designer</strong>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-bookmark-line"></i>
                </div>
                <span>Kathryn Mcgee</span> Applied For A Job{" "}
                <strong>Senior Product Designer</strong>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-bookmark-line"></i>
                </div>
                <span>Kaedyn Fraser</span> Applied For A Job{" "}
                <strong>Product Designer</strong>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-bookmark-line"></i>
                </div>
                <span>Dianna Smiley</span> Applied For A Job{" "}
                <strong>Android Developer</strong>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-bookmark-line"></i>
                </div>
                <span>Micheal Murphy</span> Applied For A Job{" "}
                <strong>Digital Marketer</strong>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-bookmark-line"></i>
                </div>
                <span>Yamilet Booker</span> Applied For A Job{" "}
                <strong>Senior Data Engineer</strong>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-bookmark-line"></i>
                </div>
                <span>Milana Myles</span> Applied For A Job{" "}
                <strong>Shopify Developer</strong>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="invoices-box">
            <h3>Invoices</h3>

            <ul>
              <li>
                <div class="icon">
                  <i class="ri-file-line"></i>
                </div>
                <ul>
                  <li class="paid">Paid</li>
                  <li>Order: #181815</li>
                  <li>Date: 14/08/2021</li>
                </ul>
                <span>Premium Plan</span>
                <a href="dashboard-invoice.html" class="default-btn">
                  View Invoice
                </a>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-file-line"></i>
                </div>
                <ul>
                  <li class="unpaid">Unpaid</li>
                  <li>Order: #181814</li>
                  <li>Date: 13/08/2021</li>
                </ul>
                <span>Advance Plan</span>
                <a href="dashboard-invoice.html" class="default-btn">
                  View Invoice
                </a>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-file-line"></i>
                </div>
                <ul>
                  <li class="paid">Paid</li>
                  <li>Order: #181813</li>
                  <li>Date: 12/08/2021</li>
                </ul>
                <span>Starter Plan</span>
                <a href="dashboard-invoice.html" class="default-btn">
                  View Invoice
                </a>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-file-line"></i>
                </div>
                <ul>
                  <li class="unpaid">Unpaid</li>
                  <li>Order: #181812</li>
                  <li>Date: 11/08/2021</li>
                </ul>
                <span>Basic Plan</span>
                <a href="dashboard-invoice.html" class="default-btn">
                  View Invoice
                </a>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-file-line"></i>
                </div>
                <ul>
                  <li class="paid">Paid</li>
                  <li>Order: #181815</li>
                  <li>Date: 14/08/2021</li>
                </ul>
                <span>Premium Plan</span>
                <a href="dashboard-invoice.html" class="default-btn">
                  View Invoice
                </a>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-file-line"></i>
                </div>
                <ul>
                  <li class="unpaid">Unpaid</li>
                  <li>Order: #181814</li>
                  <li>Date: 13/08/2021</li>
                </ul>
                <span>Advance Plan</span>
                <a href="dashboard-invoice.html" class="default-btn">
                  View Invoice
                </a>
              </li>

              <li>
                <div class="icon">
                  <i class="ri-file-line"></i>
                </div>
                <ul>
                  <li class="paid">Paid</li>
                  <li>Order: #181813</li>
                  <li>Date: 12/08/2021</li>
                </ul>
                <span>Starter Plan</span>
                <a href="dashboard-invoice.html" class="default-btn">
                  View Invoice
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Notifications and Invoices Area --> */}

      {/* <!-- Start Recent Jobs Area --> */}
      <div class="dashboard-jobs-box">
        <h2>Jobs Applied Recently</h2>

        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="dashboard-job-card">
              <div class="job-content">
                <div class="company-logo">
                  <a href="job-details-1.html">
                    <img src="assets/images/job/job-1.png" alt="image" />
                  </a>
                </div>
                <h3>
                  <a href="job-details-1.html">Assistant Editor</a>
                </h3>
                <div class="bookmark-btn">
                  <i class="ri-bookmark-line"></i>
                </div>
                <div class="hover-bookmark-btn">
                  <i class="ri-bookmark-fill"></i>
                </div>
                <ul class="location-information">
                  <li>
                    <i class="ri-briefcase-line"></i> Segment
                  </li>
                  <li>
                    <i class="ri-map-pin-line"></i> United Kingdom
                  </li>
                  <li>
                    <i class="ri-money-dollar-circle-line"></i> $25k - $35k
                  </li>
                </ul>
                <ul class="job-tag-list">
                  <li>Full Time</li>
                  <li class="urgent">Urgent</li>
                  <li class="private">Private</li>
                </ul>
                <ul class="option-list">
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="View Aplication"
                      type="button"
                    >
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Approve Aplication"
                      type="button"
                    >
                      <i class="ri-check-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Reject Aplication"
                      type="button"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete Aplication"
                      type="button"
                    >
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="dashboard-job-card">
              <div class="job-content">
                <div class="company-logo">
                  <a href="job-details-1.html">
                    <img src="assets/images/job/job-2.png" alt="image" />
                  </a>
                </div>
                <h3>
                  <a href="job-details-1.html">Marketing Director</a>
                </h3>
                <div class="bookmark-btn">
                  <i class="ri-bookmark-line"></i>
                </div>
                <div class="hover-bookmark-btn">
                  <i class="ri-bookmark-fill"></i>
                </div>
                <ul class="location-information">
                  <li>
                    <i class="ri-briefcase-line"></i> Segment
                  </li>
                  <li>
                    <i class="ri-map-pin-line"></i> United Kingdom
                  </li>
                  <li>
                    <i class="ri-money-dollar-circle-line"></i> $25k - $35k
                  </li>
                </ul>
                <ul class="job-tag-list">
                  <li>Full Time</li>
                  <li class="urgent">Urgent</li>
                  <li class="private">Private</li>
                </ul>
                <ul class="option-list">
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="View Aplication"
                      type="button"
                    >
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Approve Aplication"
                      type="button"
                    >
                      <i class="ri-check-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Reject Aplication"
                      type="button"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete Aplication"
                      type="button"
                    >
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="dashboard-job-card">
              <div class="job-content">
                <div class="company-logo">
                  <a href="job-details-1.html">
                    <img src="assets/images/job/job-3.png" alt="image" />
                  </a>
                </div>
                <h3>
                  <a href="job-details-1.html">Android Developer</a>
                </h3>
                <div class="bookmark-btn">
                  <i class="ri-bookmark-line"></i>
                </div>
                <div class="hover-bookmark-btn">
                  <i class="ri-bookmark-fill"></i>
                </div>
                <ul class="location-information">
                  <li>
                    <i class="ri-briefcase-line"></i> Segment
                  </li>
                  <li>
                    <i class="ri-map-pin-line"></i> United Kingdom
                  </li>
                  <li>
                    <i class="ri-money-dollar-circle-line"></i> $25k - $35k
                  </li>
                </ul>
                <ul class="job-tag-list">
                  <li>Full Time</li>
                  <li class="urgent">Urgent</li>
                  <li class="private">Private</li>
                </ul>
                <ul class="option-list">
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="View Aplication"
                      type="button"
                    >
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Approve Aplication"
                      type="button"
                    >
                      <i class="ri-check-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Reject Aplication"
                      type="button"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete Aplication"
                      type="button"
                    >
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="dashboard-job-card">
              <div class="job-content">
                <div class="company-logo">
                  <a href="job-details-1.html">
                    <img src="assets/images/job/job-4.png" alt="image" />
                  </a>
                </div>
                <h3>
                  <a href="job-details-1.html">Senior Manager</a>
                </h3>
                <div class="bookmark-btn">
                  <i class="ri-bookmark-line"></i>
                </div>
                <div class="hover-bookmark-btn">
                  <i class="ri-bookmark-fill"></i>
                </div>
                <ul class="location-information">
                  <li>
                    <i class="ri-briefcase-line"></i> Segment
                  </li>
                  <li>
                    <i class="ri-map-pin-line"></i> United Kingdom
                  </li>
                  <li>
                    <i class="ri-money-dollar-circle-line"></i> $25k - $35k
                  </li>
                </ul>
                <ul class="job-tag-list">
                  <li>Full Time</li>
                  <li class="urgent">Urgent</li>
                  <li class="private">Private</li>
                </ul>
                <ul class="option-list">
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="View Aplication"
                      type="button"
                    >
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Approve Aplication"
                      type="button"
                    >
                      <i class="ri-check-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Reject Aplication"
                      type="button"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete Aplication"
                      type="button"
                    >
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="dashboard-job-card">
              <div class="job-content">
                <div class="company-logo">
                  <a href="job-details-1.html">
                    <img src="assets/images/job/job-5.png" alt="image" />
                  </a>
                </div>
                <h3>
                  <a href="job-details-1.html">Digital Marketer</a>
                </h3>
                <div class="bookmark-btn">
                  <i class="ri-bookmark-line"></i>
                </div>
                <div class="hover-bookmark-btn">
                  <i class="ri-bookmark-fill"></i>
                </div>
                <ul class="location-information">
                  <li>
                    <i class="ri-briefcase-line"></i> Segment
                  </li>
                  <li>
                    <i class="ri-map-pin-line"></i> United Kingdom
                  </li>
                  <li>
                    <i class="ri-money-dollar-circle-line"></i> $25k - $35k
                  </li>
                </ul>
                <ul class="job-tag-list">
                  <li>Full Time</li>
                  <li class="urgent">Urgent</li>
                  <li class="private">Private</li>
                </ul>
                <ul class="option-list">
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="View Aplication"
                      type="button"
                    >
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Approve Aplication"
                      type="button"
                    >
                      <i class="ri-check-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Reject Aplication"
                      type="button"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete Aplication"
                      type="button"
                    >
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="dashboard-job-card">
              <div class="job-content">
                <div class="company-logo">
                  <a href="job-details-1.html">
                    <img src="assets/images/job/job-6.png" alt="image" />
                  </a>
                </div>
                <h3>
                  <a href="job-details-1.html">Shopify Developer</a>
                </h3>
                <div class="bookmark-btn">
                  <i class="ri-bookmark-line"></i>
                </div>
                <div class="hover-bookmark-btn">
                  <i class="ri-bookmark-fill"></i>
                </div>
                <ul class="location-information">
                  <li>
                    <i class="ri-briefcase-line"></i> Segment
                  </li>
                  <li>
                    <i class="ri-map-pin-line"></i> United Kingdom
                  </li>
                  <li>
                    <i class="ri-money-dollar-circle-line"></i> $25k - $35k
                  </li>
                </ul>
                <ul class="job-tag-list">
                  <li>Full Time</li>
                  <li class="urgent">Urgent</li>
                  <li class="private">Private</li>
                </ul>
                <ul class="option-list">
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="View Aplication"
                      type="button"
                    >
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Approve Aplication"
                      type="button"
                    >
                      <i class="ri-check-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Reject Aplication"
                      type="button"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete Aplication"
                      type="button"
                    >
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="dashboard-job-card">
              <div class="job-content">
                <div class="company-logo">
                  <a href="job-details-1.html">
                    <img src="assets/images/job/job-7.png" alt="image" />
                  </a>
                </div>
                <h3>
                  <a href="job-details-1.html">Senior Data Engineer</a>
                </h3>
                <div class="bookmark-btn">
                  <i class="ri-bookmark-line"></i>
                </div>
                <div class="hover-bookmark-btn">
                  <i class="ri-bookmark-fill"></i>
                </div>
                <ul class="location-information">
                  <li>
                    <i class="ri-briefcase-line"></i> Segment
                  </li>
                  <li>
                    <i class="ri-map-pin-line"></i> United Kingdom
                  </li>
                  <li>
                    <i class="ri-money-dollar-circle-line"></i> $25k - $35k
                  </li>
                </ul>
                <ul class="job-tag-list">
                  <li>Full Time</li>
                  <li class="urgent">Urgent</li>
                  <li class="private">Private</li>
                </ul>
                <ul class="option-list">
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="View Aplication"
                      type="button"
                    >
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Approve Aplication"
                      type="button"
                    >
                      <i class="ri-check-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Reject Aplication"
                      type="button"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete Aplication"
                      type="button"
                    >
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="dashboard-job-card">
              <div class="job-content">
                <div class="company-logo">
                  <a href="job-details-1.html">
                    <img src="assets/images/job/job-8.png" alt="image" />
                  </a>
                </div>
                <h3>
                  <a href="job-details-1.html">UI/UX Designerr</a>
                </h3>
                <div class="bookmark-btn">
                  <i class="ri-bookmark-line"></i>
                </div>
                <div class="hover-bookmark-btn">
                  <i class="ri-bookmark-fill"></i>
                </div>
                <ul class="location-information">
                  <li>
                    <i class="ri-briefcase-line"></i> Segment
                  </li>
                  <li>
                    <i class="ri-map-pin-line"></i> United Kingdom
                  </li>
                  <li>
                    <i class="ri-money-dollar-circle-line"></i> $25k - $35k
                  </li>
                </ul>
                <ul class="job-tag-list">
                  <li>Full Time</li>
                  <li class="urgent">Urgent</li>
                  <li class="private">Private</li>
                </ul>
                <ul class="option-list">
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="View Aplication"
                      type="button"
                    >
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Approve Aplication"
                      type="button"
                    >
                      <i class="ri-check-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Reject Aplication"
                      type="button"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      class="option-btn d-inline-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete Aplication"
                      type="button"
                    >
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Recent Jobs Area --> */}

      {/* <!-- Start Copyright Area --> */}
      <div class="copyrights-area">
        <div class="row align-items-center">
          <div class="col-lg-6 col-sm-6 col-md-6">
            <p>
              <i class="ri-copyright-line"></i> 2021 <a href="#">Eeza</a>. All
              rights reserved
            </p>
          </div>

          <div class="col-lg-6 col-sm-6 col-md-6 text-end">
            <p>
              Designed by ❤️{" "}
              <a href="https://envytheme.com/" target="_blank">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End Copyright Area --> */}
    </div>
  );
};
export default CandidateDashboard;
