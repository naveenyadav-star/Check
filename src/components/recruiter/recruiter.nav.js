import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/logout.util";

const RecruiterNav = (props) => {
    let navigate = useNavigate()
  const logoutUser = () => {
    logout();
    navigate("/register");
  };
    return (
<div>
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
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Home 
                                        <i class="ri-arrow-down-s-line"></i>
                                    </a>

                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Job Listing 
                                        <i class="ri-arrow-down-s-line"></i>
                                    </a>

                                    
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Candidates
                                        <i class="ri-arrow-down-s-line"></i>
                                    </a>

                                    
                                </li>

                                

                                

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Blog 
                                        <i class="ri-arrow-down-s-line"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="blog.html" class="nav-link">Blog</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="blog-right-sidebar.html" class="nav-link">Blog Right Sidebar</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="blog-details.html" class="nav-link">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
    
                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">Contact</a>
                                </li>
                            </ul>

                            <div class="others-options d-flex align-items-center">
                                <div class="option-item">
                                    <div class="dropdown profile-nav-item">
                                        <a href="#" class="dropdown-bs-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <div class="menu-profile">
                                                <img src="assets/images/dashboard/user1.jpg" class="rounded-circle" alt="image" />
                                                <span class="name">My Account</span>
                                            </div>
                                        </a>
            
                                        <div class="dropdown-menu">
                                            <div class="dropdown-header d-flex flex-column align-items-center">
                                                <div class="figure mb-3">
                                                    <img src="assets/images/dashboard/user1.jpg" class="rounded-circle" alt="image" />
                                                </div>
            
                                                <div class="info text-center">
                                                    <span class="name">{props.jobProviderData && props.jobProviderData.name ? props.jobProviderData.name : ""}</span>
                                                    <p class="mb-3 email">{props.jobProviderData && props.jobProviderData.company ? props.jobProviderData.company : ""}</p>
                                                </div>
                                            </div>
            
                                            <div class="dropdown-body">
                                                <ul class="profile-nav p-0 pt-3">
                                                    <li class="nav-item active">
                                                        <a href="dashboard.html" class="nav-link">
                                                            <span class="icon"><i class="ri-home-line"></i></span>
                                                            <span class="menu-title">Dashboard</span>
                                                        </a>
                                                    </li>

                                                    <li class="nav-item">
                                                        <a href="dashboard-applicants.html" class="nav-link">
                                                            <span class="icon"><i class="ri-file-list-line"></i></span>
                                                            <span class="menu-title">All Applicants</span>
                                                        </a>
                                                    </li>
                                
                                                    <li class="nav-item">
                                                        <a href="dashboard-submit-resume.html" class="nav-link">
                                                            <span class="icon"><i class="ri-bookmark-line"></i></span>
                                                            <span class="menu-title">Submit Resumes</span>
                                                        </a>
                                                    </li>
                                
                                                    <li class="nav-item">
                                                        <a href="dashboard-packages.html" class="nav-link">
                                                            <span class="icon"><i class="ri-stack-fill"></i></span>
                                                            <span class="menu-title">Packages</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
            
                                            <div class="dropdown-footer">
                                                <ul class="profile-nav">
                                                    <li class="nav-item">
                                                        <a href="logout" onClick={logoutUser} class="nav-link"><i class="ri-logout-box-r-line"></i> <span>Logout</span></a> 
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
</div>
    
    )
};


export default RecruiterNav;