import React from 'react'
import 'bootstrap'
import './theme.css'
import "./App.css";
import Registration from './components/Auth/Registration'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App container text-primary bg-secondary pb-4">
      <Router>
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
            <a className="navbar-brand text-secondary" href="#">
              GoodListens
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to={`/wanttolisten`} className="nav-link text-secondary">
                  Want To Listen
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/listened`} className="nav-link text-secondary">
                  Listened
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Another tab
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
                className="btn btn-outline-secondary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <h1>Welcome to GoodListens</h1>
        <h4>Your podcast place.</h4>
        <Registration />
        <ul>
          <li className="text-left">A list of popular podcasts here</li>
        </ul>
      </Router>
    </div>
  );
}

export default App;
