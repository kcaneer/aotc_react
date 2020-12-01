import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../Utilities/AppContext";

export default function Want() {
  const history = useHistory();
  const { bearer, setName, name, setBearer } = useContext(AppContext);

  const logout = (event) => {
    setBearer("");
    history.push("/");
  };
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
            <h4>GoodListens</h4>
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
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Find a podcast here"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary my-auto" type="submit">
              Search
            </button>
          </form>
          <button
            className="btn btn-outline-secondary my-2 my-sm-0 ml-5"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
