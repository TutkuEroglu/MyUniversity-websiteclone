import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../reducer/infuser";
import Axios from "axios";
import "./Login.css";


export default function HomePage() {

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

  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
      console.log(response)
    })
  }, [])

  return <div>{role === "visitor" ? "asd" : ""}</div>;
}
