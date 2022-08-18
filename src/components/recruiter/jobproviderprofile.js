import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import axios from "axios";
import apiList from "../../lib/apiList";
import RecruiterMenu from "./recruiter.menu";
import RecruiterNav from "./recruiter.nav";
import RecruiterDashboard from "./recruiter.dashboard";


const JobProviderProfile = (props) => {
  
  const [jobUserData, setJobUserData] = useState(null);

  useEffect(() => {
    axios
      .get(apiList.user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setJobUserData(res.data))
      .then(response=>console.log(jobUserData))
      .catch((err) => console.log(err));
  }, []);
  if (!localStorage.getItem("token")) {
    return <Navigate to="/jobauthentication" />;
  }
  return (
    
<div>
      <RecruiterNav jobProviderData={jobUserData} />
      <RecruiterMenu />
      <RecruiterDashboard jobProviderData={jobUserData}/>
    </div>
  );
};

export const ErrorPage = (props) => {
  return <h2>Error 404</h2>;
};

export default JobProviderProfile;
