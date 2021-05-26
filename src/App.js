import React, { useState, useEffect } from "react";
import Login from "./Pages/Login"
import HomePage from "./Pages/HomePage"
import { useSelector } from "react-redux";
import { selectUser } from "./reducer/infuser";
import Axios from "axios";
import SideBar from "./SideBar/SideBar";
import Navbar from "./Navbar/Navbar";



import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


export default function App(props) {

  const [role, setRole] = useState("");

  const user = useSelector(selectUser);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
      if (response.data.loggedIn === true) {
        console.log(response)
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <>
    <div className="App">
      
    {role === "visitor" ? "" : <Login /> }
    {role === "visitor" ? <Navbar /> : "" }
    {role === "visitor" ? <SideBar /> : "" }
      
    </div>
    
    <Router>
    <Route path="/HomePage" render={(props) => <HomePage />} />
    <Route path="/" exact render={(props) => <Login />} />
    </Router>
    </>
  )
}
