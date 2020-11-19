import React, {Component} from 'react';
import axios from "axios";
import { render } from 'react-dom';

export default class Registration extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            password:"",
            loginErros: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

handleChange(event){
   this.setState({
       [event.target.name]: event.target.value
   }); 
}

handleSubmit(event){
    const { username, email, password } = this.state;

    axios
      .post(
        "http://127.0.0.1:8000/register",
        {
          username: username,
          email: email,
          password: password,
        },
        { withCredentials: true,  }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
};

render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="username"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
    }
};