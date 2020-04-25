import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './login.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Login extends Component {
    handleClick = () => {
        this.props.history.push("menu");
    }
    render() {
        return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Sign-in</Link>
          <Link className="navbar-brand" to={"/sign-up"}>Sign-up</Link>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
           <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button onClick={this.handleClick} type="submit"  className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
                    </div>
      </div>
            </div>
        );
    }
}
