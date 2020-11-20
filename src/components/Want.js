import React from 'react'

export default function Private() {
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
            <a className="navbar-brand text-secondary" href="/auth">
              GoodListens
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link text-secondary" href="/auth/want">
                  Want To Listen
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="/auth/listened">
                  Listened
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
        <h1>These are the podcasts you WANT to listen to!</h1>
      </div>
    );
}
