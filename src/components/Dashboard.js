import React, { useState, useEffect, useContext } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  UncontrolledCollapse,
} from "reactstrap";
import AppContext from '../Utilities/AppContext'
import { axiosHelper } from "../Utilities/axiosHelper";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();
  const {bearer} = useContext(AppContext)
  const {name} = useContext(AppContext)
  const { setName } = useContext(AppContext);
  function receivedUserInfo(data){    
    setName(data.name);
  }

  useEffect(
    () =>
    axiosHelper({
      method: "get",
      url: "http://127.0.0.1:8000/api/user",
      headers:{Accept: "application/json", Authorization: `Bearer ${bearer}`},
      history,
      functionToRun: receivedUserInfo 
    }),
    [bearer]
    );
    console.log(bearer);
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
            <button
              className="btn btn-outline-secondary my-auto"
              type="submit"
            >
              Search
            </button>
          </form>
          <button className="btn btn-outline-secondary my-2 my-sm-0 ml-5">
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
              {/* <div className="col col-10 mx-auto rounded">
                {this.state.podcasts.map((obj, i) => {
                  return (
                    <div className="row justify-content-around p-3 bg-secondary border border-primary rounded my-auto">
                      <div className="col col-4 text-left" key={i}>
                        <strong>{obj}</strong>
                      </div>
                      <div className="col col-4 text-right">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm mr-2"
                          onClick={() =>
                            this.addToWant(this.state.podcasts.obj)
                          }
                        >
                          Want to Listen{" "}
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary btn-sm border border-primary"
                          onClick={() =>
                            this.addToListened(this.state.podcasts.obj)
                          }
                        >
                          Listened
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div> */}
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  );
}
