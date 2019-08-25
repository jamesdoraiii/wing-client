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
      login: true
    };
  }

  toggleSignIn = () => {
    this.setState({ login: !this.state.login });
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
                <Button className="auth-loginBox-button">Submit</Button>
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
}

export default Auth;
