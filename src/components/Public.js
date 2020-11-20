import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import Login from './Authentication/Login'
import Registration from './Authentication/Registration'

const Example = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
  
  const [popoverOpen2, setPopoverOpen2] = useState(false);

  const toggle2 = () => setPopoverOpen2(!popoverOpen2);

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
          <a className="navbar-brand text-secondary" href="/">
            GoodListens
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Button
                id="Popover1"
                type="button"
                className="bg-primary text-secondary border border-primary mr-2"
              >
                Want to Listen
              </Button>
              <Popover
                placement="bottom"
                isOpen={popoverOpen}
                target="Popover1"
                toggle={toggle}
              >
                <PopoverHeader>Login to view this content</PopoverHeader>
                <PopoverBody>
                  Create a free account to get access to thousands of podcasts
                  and track your listening activity.
                </PopoverBody>
              </Popover>
            </li>
            <li className="nav-item">
              <Button
                id="Popover2"
                type="button"
                className="bg-primary text-secondary border border-primary mr-2"
              >
                Listened
              </Button>
              <Popover
                placement="bottom"
                isOpen={popoverOpen2}
                target="Popover2"
                toggle={toggle2}
              >
                <PopoverHeader>Login to view this content</PopoverHeader>
                <PopoverBody>
                  Create a free account to get access to thousands of podcasts
                  and track your listening activity.
                </PopoverBody>
              </Popover>
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
              className="btn btn-outline-secondary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div class="jumbotron jumbotron-fluid bg-secondary">
        <div class="container">
          <h1 class="display-4">Welcome to GoodListens</h1>
          <h3 class="lead">Your podcast place.</h3>
        </div>
      </div>
      <h3>
        Register or Login to find new podcasts and track your listening
        activity.
      </h3>
      <Login />
      <Registration />
    </div>
  );
};

export default Example;
