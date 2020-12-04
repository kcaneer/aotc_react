import React, { useState, useContext } from "react";
import { axiosHelper } from "../../Utilities/axiosHelper";
import { useHistory } from "react-router-dom";
import AppContext from "../../Utilities/AppContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { setBearer } = useContext(AppContext);

  function receivedInfo(data) {
    setBearer(data.access_token);
    localStorage.setItem("bearer", data.access_token);
  }

  const handleClick = (event) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    };
    axiosHelper({
      method: "post",
      url: "http://127.0.0.1:8000/v1/oauth/token",
      data: {
        grant_type: "password",
        client_id: "2",
        client_secret: "OVhNUrmXF7BPHLWf8XwNqMVUbaeAyhZkDUBqVMmG",
        password,
        username: email,
        scope: "",
      },
      headers,
      history,
      functionToRun: receivedInfo,
    });
    history.push("/dashboard");
  };
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
