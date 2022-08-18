import apiList from "../../lib/apiList";
import isAuth from "../../lib/isAuth";
import { useState, useContext } from "react";
import axios from "axios";
import { Navigate  } from "react-router-dom"
import {store} from '../../App'
import { useNavigate } from "react-router";

    

const JobProviderAuth = (props) => {
    let navigate = useNavigate();
    //register validation
    const [signupDetails, setSignupDetails] = useState({
      type: "recruiter",
      email: "",
      password: "",
      name: "",
      company: "",
      city: "",
      state: "",
      mobile_number: ""
    });
    

    const changeHandler = e =>{
        setSignupDetails({...signupDetails,[e.target.name]:e.target.value})
    }
   
    const submitHandler = e => {
        e.preventDefault();
        axios
        .post(apiList.signup, signupDetails)
        .then(
            res =>alert("Register added")
        ).catch((err) => {
            alert(err.message)
            
        })
        return navigate ('/jobauthentication')
        

    }
    // Login details authentication
    const [loginDetails, setLoginDetails] = useState({
        type: "recruiter",
        email: "",
        password: ""
      });
    const loginChangeHandler = e =>{
        setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
    }
    //const [token,setToken]=useContext(store)
    const setPopup = useContext(store);

    const [loggedin, setLoggedin] = useState(isAuth());
    const submitLoginHandler = e => {
        
        e.preventDefault();
        
        axios
        .post(apiList.login, loginDetails)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("type", response.data.type);
            setLoggedin(isAuth());
            alert(
              "Logged in successfully",
            );
            console.log(response);
    }).catch((err) => {
        alert(err.message)
    })
}
    if(localStorage.getItem("token")){
        
        return navigate ('/jobproviderprofile')
    }
      
  return (
    
      <div>
        {/* <!-- Start Page Banner Area --> */}
        <div class="page-banner-area item-bg-two">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-banner-content">
                            <h2>Profile Authentication</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Page Banner Area --> */}
        {/* <!-- Start Profile Authentication Area --> */}
        <div class="profile-authentication-area ptb-100">
            <div class="container">
                <div class="profile-authentication-tabs">
                    <div class="authentication-tabs-list">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="login-tab" data-bs-toggle="tab" href="#login" role="tab" aria-controls="login">Login</a>
                            </li>
    
                            <li class="nav-item">
                                <a class="nav-link" id="register-tab" data-bs-toggle="tab" href="#register" role="tab" aria-controls="register">Register</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" id="reset-password-tab" data-bs-toggle="tab" href="#reset-password" role="tab" aria-controls="reset-password">Reset Password</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="login" role="tabpanel">
                            <div class="eeza-authentication-form">
                                <form onSubmit={submitLoginHandler}>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name='email' onChange={loginChangeHandler} placeholder="Username" />
                                    </div>
    
                                    <div class="form-group">
                                        <input type="text" class="form-control" name='password'  onChange={loginChangeHandler} placeholder="Password" />
                                    </div>
    
                                    <div class="row align-items-center">
                                        <div class="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                                            <p>
                                                <input type="checkbox" id="test1" />
                                                <label for="test1">Remember me</label>
                                            </p>
                                        </div>
    
                                        <div class="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                                            <a href="#" class="lost-your-password">Lost your password?</a>
                                        </div>
                                    </div>
    
                                    <button type="submit" class="default-btn">Log In <i class="flaticon-send"></i></button>
                                </form>

                                <span class="sub-title"><span>Or</span></span>

                                <div class="login-with-account">
                                    <ul>
                                        <li><a href="#" class="facebook">Log In with Facebook <i class="ri-facebook-line"></i></a></li>
                                        <li><a href="#" class="google">Log In with Google <i class="ri-google-line"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="register" role="tabpanel">
                            <div class="eeza-authentication-form">
                                <form onSubmit={submitHandler}>
                                <div class="form-group">
                                        <input type="text" name='name' class="form-control" onChange={changeHandler} 
                                            placeholder="Enter your Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name='email' class="form-control" onChange={changeHandler}
                                            placeholder="Enter your email" />
                                    </div>
    
                                    <div class="form-group">
                                        <input type="text" name='password' class="form-control" onChange={changeHandler}
                                            placeholder="Password" />
                                    </div>

                                    <div class="form-group">
                                        <input type="text" class="form-control" onChange={changeHandler}
                                            
                                            placeholder="Confirm Password" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name='mobile_number' class="form-control" onChange={changeHandler}
                                            placeholder="Mobile Number" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name='company' class="form-control" onChange={changeHandler}
                                            placeholder="Company Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name='state' class="form-control" onChange={changeHandler}
                                            placeholder="State" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name='city' class="form-control" onChange={changeHandler}
                                            placeholder="City" />
                                    </div>
    
                                    <div class="remember-me-wrap">
                                        <p>
                                            <input type="checkbox" id="test2" />
                                            <label for="test2">I Accept All <a href="terms-of-service.html">Terms & Conditions</a></label>
                                        </p>
                                    </div>
    
                                    <button type="submit" class="default-btn">Register <i class="flaticon-send"></i></button>
                                </form>

                                <span class="sub-title"><span>Or</span></span>

                                <div class="login-with-account">
                                    <ul>
                                        <li><a href="#" class="facebook">Log In with Facebook <i class="ri-facebook-line"></i></a></li>
                                        <li><a href="#" class="google">Log In with Google <i class="ri-google-line"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="reset-password" role="tabpanel">
                            <div class="eeza-authentication-form">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Enter username or email" />
                                    </div>
    
                                    <div class="remember-me-wrap">
                                        <p>
                                            <input type="checkbox" id="test3" />
                                            <label for="test3">Remember me</label>
                                        </p>
                                    </div>
    
                                    <button type="submit" class="default-btn">Submit Now <i class="flaticon-send"></i></button>
                                </form>

                                <span class="sub-title"><span>Or</span></span>

                                <div class="login-with-account">
                                    <ul>
                                        <li><a href="#" class="facebook">Log In with Facebook <i class="ri-facebook-line"></i></a></li>
                                        <li><a href="#" class="google">Log In with Google <i class="ri-google-line"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Start Profile Authentication Area --> */}
        </div>
      
  );
};

export const ErrorPage = (props) => {
  return (
    
	<h2>Error 404</h2>
      
  );
};

export default JobProviderAuth;
