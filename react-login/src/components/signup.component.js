import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sigup.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class SignUp extends Component {
    render() {
        return (
            <div className="bcksigup">
    <div className="App" >
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div>
          <Link className="navbar-brand" to={"/sign-in"}>Sign-in</Link>
          <Link className="navbar-brand" to={"/sign-up"}>Sign-up</Link>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
            </div>

            </div>
            </div>
        );
    }
}
