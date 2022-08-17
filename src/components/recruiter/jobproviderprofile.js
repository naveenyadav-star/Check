import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import axios from "axios";
import apiList from "../../lib/apiList";


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

    // data &&
    // <h1>Welcome to {data.name}</h1>
    <div>
      <h1>Welcome to {jobUserData.name} </h1>
    </div>
  );
};

export const ErrorPage = (props) => {
  return <h2>Error 404</h2>;
};

export default JobProviderProfile;
