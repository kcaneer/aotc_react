import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    console.log(password, email);
    const headers = {
      //   "Content-Type": "application/json;charset=UTF8",
      //   "Content-Type": "application/x-www-form-urlencoded",
      //   "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    };
    axios({
      url: "http://127.0.0.1:8000/v1/oauth/token",
      method: "post",
      data: {
        grant_type: "password",
        client_id: '6',
        client_secret: "2dtobHf0U4BXyhnzUeZz7b6WMUf2tp0SxAJFbPkd",
        password: password,
        username: email,
        scope: "",
      },
      headers,
    })
      .then((response) => {
          console.log(response);
        if (response.data.status === "loggedin") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  }
  render() {
    return (
      <div className="pb-2">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
