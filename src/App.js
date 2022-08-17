import logo from './logo.svg';
import './App.css';
import { createContext, useState } from "react";
import JobProvider from './components/recruiter/jobauthentication';

import Welcome, { ErrorPage } from "./components/Welcome";
import Navbar from "./components/Navbar";
import Register from "./components/register"
import MyProfile from './components/MyProfile';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Grid, makeStyles } from "@material-ui/core";
import Logout from './components/logout';
import JobProviderProfile from './components/recruiter/jobproviderprofile';

export const store = createContext();

export const SetPopupContext = createContext();
const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "64px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

function App() {
  const [token,setToken] = useState(null);
	const classes = useStyles();
	const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return (
   <store.Provider value={[token,setToken]} >
	<BrowserRouter>
      <Routes> 
        <Route path="/" element={<Navbar />}>
          <Route path="register" element={<Register />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="logout" element={<Logout />} />
          <Route path="jobauthentication" element={<JobProvider />} />
          <Route path="jobproviderprofile" element={<JobProviderProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </store.Provider> 
             
  );
}

export default App;
