import React, { useState, useEffect, useContext } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  UncontrolledCollapse,
} from "reactstrap";
import AppContext from "../Utilities/AppContext";
import { axiosHelper } from "../Utilities/axiosHelper";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
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
  } = useContext(AppContext);

  function receivedUserInfo(data) {
    setName(data.name);
    setUserid(data.id);
    console.log(data);
  }

  function receivedPodcastInfo(data) {
    setPodcasts(data);
    console.log(data);
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
    history.push("/dashboard");
  }, [bearer]);

  useEffect(() => {
    axiosHelper({
      method: "get",
      url: "http://127.0.0.1:8000/podcasts",
      headers: {
        Accept: "application/json",
      },
      history,
      functionToRun: receivedPodcastInfo,
    });
    history.push("/dashboard");
  }, [userid]);

  const addToWant = (id) => {
    axiosHelper({
      method: "post",
      url: "http://127.0.0.1:8000/want",
      data: {
        podcast_id: id,
        user_id: userid,
      },
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${bearer}`,
      },
      functionToRun: receivedPodcastInfo,
      history,
    });
    history.push("/dashboard");
  };

  const addToListened = (id) => {
    axiosHelper({
      method: "post",
      url: "http://127.0.0.1:8000/listened",
      data: {
        podcast_id: id,
        user_id: userid,
      },
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${bearer}`,
      },
      functionToRun: receivedPodcastInfo,
      history,
    });
    history.push("/dashboard");
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
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Find a podcast here"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-secondary my-auto"
              type="submit"
              // onClick={() => search()}
            >
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
      <div class="jumbotron jumbotron-fluid bg-secondary">
        <div class="container">
          <h1 class="display-4">Welcome back to goodListens, {name}</h1>
          <h3 class="lead">Your podcast place.</h3>
        </div>
      </div>
      <div className="container bg-secondary text-center rounded">
        <Button
          id="lunch"
          className="pt-4 bg-primary text-light border border-primary
            rounded mb-2"
        >
          <h4>Here are some popular podcasts you might want to check out!</h4>
        </Button>
        <UncontrolledCollapse toggler="#lunch">
          <Card className="bg-primary">
            <CardBody>
              <div className="col col-12 mx-auto rounded">
                {podcasts.slice(0, 25).map((obj, i) => {
                  const foundListenData = obj.listens.find((i) => {
                    console.log({ i, userid, obj });
                    return i.user_id == userid;
                  });
                  console.log(foundListenData);
                  return (
                    <div
                      key={i}
                      className="row justify-content-around pt-3 bg-secondary border border-primary rounded my-auto"
                    >
                      <div className="col col-8 text-left pt-1 text-center text-primary">
                        <h6>
                          <strong>
                            {obj.id}. {obj.title}
                          </strong>
                        </h6>
                        <div>{obj.info}</div>
                        <div className="text-success pb-3">{obj.genre}</div>
                      </div>
                      <div className="col col-4 text-right my-auto">
                        <button
                          type="button"
                          id="wanted"
                          className="btn btn-primary btn-sm mr-2"
                          onClick={() => addToWant(obj.id)}
                        >
                          {foundListenData
                            ? foundListenData.listened
                              ? "✔️"
                              : "Want to Listen"
                            : "Want to Listen"}
                        </button>
                        <button
                          type="button"
                          id="listened"
                          class="btn btn-secondary btn-sm border border-primary"
                          onClick={() => addToListened(obj.id)}
                        >
                          {foundListenData
                            ? foundListenData.listened
                              ? "✔️"
                              : "Listened"
                            : "Listened"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  );
}
