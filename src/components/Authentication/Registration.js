import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosHelper } from "../../Utilities/axiosHelper";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  function receivedBearer(data){
        setBearer(data.access_token);
        localStorage.setItem("bearer", data.access_token);
      }
      
  const handleClick = (event) => {
    const headers = {
      'Accept': "application/json",
      "Content-Type": "application/json; charset=utf-8",
    };
    axiosHelper({method:'post', url:'http://127.0.0.1:8000/register', data:{
        name,
        email,
        password,
      }, headers, functionToRun: receivedBearer, history}) 
  };
  return (
    <div className="p-5 my-auto">
      <input
        type="name"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
        Register
      </button>
    </div>
  );
}
