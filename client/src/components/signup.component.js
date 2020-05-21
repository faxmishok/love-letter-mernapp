import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sigup.css';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class SignUp extends Component {
    state = {
        first_name: '',
        username: '',
        password: '',
        last_name: '',
        passwordConfirmation: '',
        email: '',
        errorMessage: ''
        };
    handleChangeFirstName = event =>{
        this.setState({first_name: event.target.value})
    }
    handleChangeUsername = event =>{
        this.setState({username: event.target.value})
    }
    handleChangePassword = event =>{
        this.setState({password: event.target.value})
    }
    handleChangeLastName = event =>{
        this.setState({last_name: event.target.value})
    }
    handleChangePasswordConfirm = event =>{
        this.setState({passwordConfirmation: event.target.value})
    }
    handleChangeEmail = event =>{
        this.setState({email: event.target.value})
    }
    handleClick = (event) => {
        event.preventDefault();

        const first_name = this.state.first_name;
        const username = this.state.username;
        const password = this.state.password;
        const last_name = this.state.last_name;
        const passwordConfirmation = this.state.passwordConfirmation;
        const email = this.state.email;


        axios.post(`http://localhost:9000/auth/user/register`, {first_name,last_name,username,password,passwordConfirmation,email})
        .then(res=>{
        if(res.status == "200"){
            this.props.history.push("menu");}
        else{
        this.setState({errorMessage: res.data.error })
        }
        })
        .catch(err=>{
            console.log(err);
        })
    }
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
                { this.state.errorMessage &&
                <h3 className="error"> { this.state.errorMessage } </h3> }                
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name = "first_name" onChange={this.handleChangeFirstName}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name = "last_name" onChange={this.handleChangeLastName} />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" name = "username" onChange={this.handleChangeUsername} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name = "email" onChange={this.handleChangeEmail} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name = "password" onChange={this.handleChangePassword}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Repeat password" name = "passwordConfirmation" onChange={this.handleChangePasswordConfirm}/>
                </div>

                <button onClick={this.handleClick} type="submit"  className="btn btn-primary btn-block">Submit</button>
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