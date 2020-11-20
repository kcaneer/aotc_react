import React from "react";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      podcasts:['Middle Tech Podcast', 'Awesome Inc', 'Syntax', 'The Joe Rogan Experience', 'Do No Harm', 'Bill Gates and Rashida Jones Ask Big Questions', 'The Daily', 'Crime Junkie', 'House of Broken Dreams', 'Real Dictators', 'The Dan Bongino Show', 'Dr. Death', 'The Ben Shapiro Show'],
    };
  }


  render(){
    return(
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
      <h1>Welcome back to GoodListens</h1>
      <h4>Your podcast place.</h4>
      <div className="container bg-white text-left border border-primary rounded">
        <h4 className="pt-4 pb-3">A list of popular podcasts here</h4>
        <div className="col col-8 mx-auto">
        {this.state.podcasts.map((obj, i) => {
              return (
                <div className="row justify-content-around pb-2">
                    <div className="col col-4 text-left" key={i}>{obj}</div>
                    <div className="col col-4 text-right">
                      <button type="button" class="btn btn-primary btn-sm mr-2">
                        Want to Listen{" "}
                      </button>
                      <button type="button" class="btn btn-secondary btn-sm">
                        Listened
                      </button>
                    </div>
                  </div>
              );
            })}         
        </div>
      </div>
    </div>
    )
  }
}
export default Auth;