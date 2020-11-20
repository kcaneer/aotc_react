import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login(){
  const[email, setEmail] = useState('') 
  const[password, setPassword] = useState('') 
  const history = useHistory();
  const handleClick = event => {
    const headers = {
      'Accept': "application/json",
      "Content-Type": "application/json; charset=utf-8",
    };
    axios({
      url: "http://127.0.0.1:8000/v1/oauth/token",
      method: "post",
      data: {
        grant_type: "password",
        client_id: "6",
        client_secret: "2dtobHf0U4BXyhnzUeZz7b6WMUf2tp0SxAJFbPkd",
        password,
        username: email,
        scope: "",
      },
      headers,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
  }
    return (
      <div className="p-5 my-auto">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="bg-primary text-secondary rounded ml-1 border border-primary"
            onClick={handleClick}
          >
            Login
          </button>
      </div>
    );
  }
