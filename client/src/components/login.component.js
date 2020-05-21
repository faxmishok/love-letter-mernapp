import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Login extends Component {
    state = {

        email: '',
        password: '',
        errorMessage: ''

        };

    
    handleChangeEmail = event =>{
        this.setState({email: event.target.value})
    }

    handleChangePassword = event =>{
        this.setState({password: event.target.value})
    }

    handleClick = (event) => {
        event.preventDefault();

        const email = this.state.email;
        const password = this.state.password;

        axios.post(`http://localhost:9000/auth/user/login`, {email,password})
        .then(res=>{
        if(res.status == "200"){
        this.props.history.push("menu");}
        else{
            this.setState({errorMessage: res.data.error })
        }
        }).catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
                <div className="bcksigup">

    <div className="App"  >
      <nav className="navbar navbar-expand-lg navbar-light fixed-top  background-color: coral">
        <div >
          <Link className="navbar-brand" to={"/sign-in"}>Sign-in</Link>
          <Link className="navbar-brand" to={"/sign-up"}>Sign-up</Link>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
           <form>
                <h3>Sign In</h3>

                { this.state.errorMessage &&
                <h3 className="error"> { this.state.errorMessage } </h3> }

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleChangeEmail}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleChangePassword}/>
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
            </div>
        );
    }
}