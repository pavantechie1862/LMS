import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

import "./index.css";

class LoginForm extends Component {
  //state with minimum possible keys and values
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
  };

  //triggers when user fills name field
  //used to make the input field as controlled input field
  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  //triggers when user fills Password field
  //used to make the input field as controlled input field
  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  //on successfull submission user navigate to home route
  onSubmitSuccess = (jwtToken) => {
    this.setState({ showSubmitError: false });
    const { history } = this.props;
    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
    });
    history.replace("/");
  };

  //on unsuccessfull submission UI displays error text and stays in same Route untill fills form correctly
  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  //uncomment this block to Authenticate user using API.
  /*
  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://domain/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };
  */

  /*For now am considering every student is authorised if student fill's form*/
  submitForm = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username === "" || password === "") {
      this.onSubmitFailure("Enter Required Fields");
    } else {
      this.onSubmitSuccess("jwt_token");
    }
  };

  //this lock returns JSX element that will render on UI
  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    );
  };

  //this lock returns JSX element that will render on UI
  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    //condition that checking weather user already login or not
    //if user already login he/she will redirect to courses route
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }

    //this component returns this JSX element
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className="form-title">Log in</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default LoginForm;
