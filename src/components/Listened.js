import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  CardBody,
} from "reactstrap";
import AppContext from "../Utilities/AppContext";
import { axiosHelper } from "../Utilities/axiosHelper";
import { useHistory } from "react-router-dom";
export default function Listened() {
  const history = useHistory();
  const {
    bearer,
    setName,
    name,
    setBearer,
    listened,
    setListened,
  } = useContext(AppContext);

  const bearerLS = localStorage.getItem("bearer");
  if (bearerLS) {
    setBearer(bearerLS);
  }
  console.log(bearerLS);

  const logout = (event) => {
    axiosHelper({
      method: "get",
      url: "http://goodlistens.herokuapp.com/logout",
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
    axiosHelper({
      method: "get",
      url: "http://goodlistens.herokuapp.com/listenedpodcasts",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${bearerLS}`,
      },
      history,
      functionToRun: receivedListenedPodcasts,
    });
  }, []);

  function receivedListenedPodcasts(data) {
    console.log(data);
    setListened(data);
  }
  return (
    <div className="vh-100">
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
          <div className="dropdown ml-5">
            <button
              className="btn btn-secondary dropdown-toggle"
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
                Profile
              </a>
              <a className="dropdown-item" onClick={logout}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container bg-secondary text-center rounded collapse show">
        <Card className="bg-primary collapse show">
          <CardBody>
            <div className="col col-12 mx-auto rounded">
              {listened.map((obj, i) => {
                return (
                  <div
                    key={i}
                    className="row justify-content-around pt-3 pb-3 bg-secondary border border-primary rounded my-auto"
                  >
                    <div className="col col-8 text-left pt-1 text-center text-primary">
                      <h6 className="mb-3">
                        <strong>{obj.podcast.title}</strong>
                      </h6>
                      <div>{obj.podcast.info}</div>
                      <p className="mb-0 mt-1">
                        <em>By: {obj.podcast.creator}</em>
                      </p>
                      <div className="row justify-content-around">
                        <div className="text-primary bg bg-white border border-primary rounded pl-3 pr-3 mt-3 pb-1 text-left mb-1">
                          ~{obj.podcast.length} minutes per episode
                        </div>
                        <div className="text-primary bg bg-white border border-primary rounded pl-3 pr-3 mt-3 pb-1 text-right mb-1">
                          {obj.podcast.genre}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
