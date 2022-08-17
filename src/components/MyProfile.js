import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { store } from "../App";
import axios from "axios";
import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";
import CandidateMenu from "./candidate-dashboard/candidate.menu";
import CandidateDashboard from "./candidate-dashboard/candidate.dashboard";

const MyProfile = (props) => {
  const [token, setToken] = useContext(store);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get(apiList.user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!localStorage.getItem("token")) {
    return <Navigate to="/register " />;
  }
  return (
    // data &&
    // <h1>Welcome to {data.name}</h1>
    <div>
      <CandidateMenu />
      <CandidateDashboard userData={userData} />
    </div>
  );
};

export const ErrorPage = (props) => {
  return <h2>Error 404</h2>;
};

export default MyProfile;
