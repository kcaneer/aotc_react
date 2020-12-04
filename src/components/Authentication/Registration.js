import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { axiosHelper } from "../../Utilities/axiosHelper";
import AppContext from "../../Utilities/AppContext";

export default function Registration() {
  const history = useHistory();
  const {
    bearer,
    setName,
    name,
    setBearer,
    userid,
    setUserid,
    podcasts,
    setPodcasts,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(AppContext);

  function receivedBearer(data) {
    setBearer(data.data.token);
    localStorage.setItem("bearer", data.data.token);
    history.push("/dashboard");
  }

  const handleClick = (event) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    };
    axiosHelper({
      method: "post",
      url: "http://127.0.0.1:8000/register",
      data: {
        name,
        email,
        password,
      },
      headers,
      functionToRun: receivedBearer,
      history,
    });
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
