import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";

import { SetPopupContext } from "../App";

const Logout = (props) => {
  //const setPopup = useContext(SetPopupContext);
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
   
  }, []);
  return <Navigate to="/register" />;
};

export default Logout;
