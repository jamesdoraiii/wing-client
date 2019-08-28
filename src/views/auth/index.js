import React, { Component } from "react";
import "./styles.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import SignUpForm from "../../components/sign-up-form";
import SignInForm from "../../components/sign-in-form";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      email: ""
    };
  }

  toggleSignIn = () => {
    this.setState({ login: !this.state.login });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="auth">
        <Paper className="auth-loginBox">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <img
                className="auth-loginBox-logo"
                src={require("../../assets/wingLogo.png")}
              />
            </Grid>

            <Grid item xs={12}>
              {this.state.login ? <SignInForm /> : <SignUpForm />}
            </Grid>

            <Grid item xs={12}>
              <div className="buttonContainer">
                <Button
                  className="auth-loginBox-button"
                  onClick={
                    this.state.login == true
                      ? this.userLogin
                      : this.newUserSignup
                  }
                >
                  Submit
                </Button>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="buttonContainer">
                <p>
                  {this.state.login ? "Not a user yet?" : "Already a user?"}
                </p>
                <Button
                  className="auth-loginBox-button"
                  onClick={this.toggleSignIn}
                >
                  {this.state.login ? "Sign Up" : "Login"}
                </Button>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }

  newUserSignup = event => {
    this.state.username === "" || this.state.password === ""
      ? this.setState({
          message:
            "Valid entry required for both username and password before continuing"
        })
      : this.setState({ message: "" });

    if (this.state.username !== "" && this.state.password !== "") {
      fetch(`${URL}/user/createuser`, {
        method: "POST", //2
        body: JSON.stringify({ user: this.state }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(response => response.json())
        .then(data => {
          this.props.setToken(data.sessionToken);
        });
      event.preventDefault();
    }
  };

  userLogin = event => {
    this.state.username === "" || this.state.password === ""
      ? this.setState({
          message:
            "Valid entry required for both username and password before continuing"
        })
      : this.setState({ message: "" });

    if (this.state.username !== "" && this.state.password !== "") {
      fetch(`${URL}/user/signin`, {
        method: "POST",
        body: JSON.stringify({ user: this.state }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data.sessionToken !== undefined) {
            this.props.setToken(data.sessionToken);
          }
        });
      event.preventDefault();
    }
  };
}

export default Auth;
