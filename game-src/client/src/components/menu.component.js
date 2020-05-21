import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';

export default class Menu extends Component  {
	    handleClick = () => {
        this.props.history.push("solo");
    }
    	handleClick_2 = () => {
        this.props.history.push("cooperative");
    }
    	handleClick_3 = () => {
        this.props.history.push("competitive");
    }
    	handleClick_4 = () => {
        this.props.history.push("local");
    }
    	handleClick_5 = () => {
        this.props.history.push("multiplayer");
    }
    	handleClick_6 = () => {
        this.props.history.push("sign-in");
    }

render(){
return(
		<div class="bck">
			
			<form >
			<ul>
                <button onClick={this.handleClick} class="button1 button--Solo hvr-pulse-grow">Solo</button>
                <button onClick={this.handleClick_2} class="button1 button--Cooperative hvr-pulse-grow">Cooperative</button>
                <button onClick={this.handleClick_3} class="button1 button--Competitive hvr-pulse-grow">Competitive</button>
                <button onClick={this.handleClick_4} class="button1 button--Local hvr-pulse-grow">Multiplayer</button>
                <button onClick={this.handleClick_5} class="button1 button--Network_Multiplayer hvr-pulse-grow">Rules</button>
                <button onClick={this.handleClick_6} class="button1 button--exit hvr-pulse-grow">Sign out</button>

			</ul>
			</form>
		</div>

);
}
}

