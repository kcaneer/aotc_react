import React, { useState, useEffect, useContext } from "react";
import AppContext from "../Utilities/AppContext";
import { axiosHelper } from "../Utilities/axiosHelper";
import { useHistory } from "react-router-dom";

export default function Profile() {
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
    setEmail
  } = useContext(AppContext);
  const bearerLS = localStorage.getItem("bearer");
  if (bearerLS) {
    setBearer(bearerLS);
  }

  function receivedUserInfo(data) {
    setName(data.name);
    setUserid(data.id);
    setEmail(data.email);
  }

  function receivedPodcastInfo(data) {
    setPodcasts(data);
  }

  const logout = (event) => {
    axiosHelper({
      method: "get",
      url: "http://127.0.0.1:8000/logout",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${bearer}`,
      },
    });
    setBearer("");
    setName("");
    history.push("/");
    localStorage.removeItem("user");
    localStorage.removeItem("bearer");
  };

  useEffect(() => {
    if (bearer.length > 0) {
      axiosHelper({
        method: "get",
        url: "http://127.0.0.1:8000/api/user",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${bearer}`,
        },
        history,
        functionToRun: receivedUserInfo,
      });
    }
  }, [bearer]);

 

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary mb-3">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand text-light" href="/dashboard">
            <h4>goodListens</h4>
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active ml-3">
              <a className="nav-link text-light" href="/dashboard/want">
                <h6>Want To Listen</h6>
              </a>
            </li>
            <li className="nav-item ml-3">
              <a className="nav-link text-light" href="/dashboard/listened">
                <h6>Listened</h6>
              </a>
            </li>
          </ul>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle ml-5"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Profile
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/profile">
                View
              </a>
              <a className="dropdown-item" onClick={logout}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
      <h1>You are currently logged in as {name} with {email}</h1>
    </div>
  );
}
