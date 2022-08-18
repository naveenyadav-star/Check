import Navbar from "./Navbar";
import { Outlet, Link } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

import RecruiterNav from "./recruiter/recruiter.nav";
import JobProviderProfile from "./recruiter/jobproviderprofile";

const MainNav = (props) => {

  return (
    <div>
        {isAuth() ? (
                  userType() === "recruiter" ? (
                    <>
                    
                    <JobProviderProfile />
                    </>
                  ):(
                    <Navbar />
                  )):(
                    <Navbar />
                  )}


    </div>


);
};

export default MainNav;