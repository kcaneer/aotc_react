import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../Utilities/AppContext";
// import { axiosHelper } from "../../Utilities/axiosHelper";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  UncontrolledCollapse,
} from "reactstrap";

export default function Want() {
  const history = useHistory();
  const { bearer, setBearer } = useContext(AppContext);

  const logout = (event) => {
    setBearer("");
    history.push("/");
    localStorage.removeItem("user");
    localStorage.removeItem("bearer");
  };
  
  // useEffect(() => {
  //   if (bearer.length > 0) {
  //     axiosHelper({
  //       method: "get",
  //       url: "http://127.0.0.1:8000/api/user",
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Bearer ${bearer}`,
  //       },
  //       history,
  //       functionToRun: receivedUserInfo,
  //     });
  //   }
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
                {/* {topTwentyFive.map((obj, i) => {
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
                    </div>
                  );
                })} */}
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  );
}
