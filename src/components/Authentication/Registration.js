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
      url: "http://goodlistens.herokuapp.com/register",
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
        className="rounded border border-secondary m-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="rounded border border-secondary m-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="rounded border border-secondary m-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="col col-sm-12">
        <button
          className="bg-primary text-white rounded ml-1 mt-2 border border-primary"
          onClick={handleClick}
        >
          Register
        </button>
      </div>
    </div>
  );
}
