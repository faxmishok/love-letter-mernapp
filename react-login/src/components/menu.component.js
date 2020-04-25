import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './menu.css';

export default class Menu extends Component{
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
		<body>

			<form>
			<ul>
                <button onClick={this.handleClick} class="button button--Solo hvr-pulse-grow">Solo</button>
                <button onClick={this.handleClick_2} class="button button--Cooperative hvr-pulse-grow">Cooperative</button>
                <button onClick={this.handleClick_3}class="button button--Competitive hvr-pulse-grow">Competitive</button>
                <button onClick={this.handleClick_4}class="button button--Local hvr-pulse-grow">Local</button>
                <button onClick={this.handleClick_5}class="button button--Network_Multiplayer hvr-pulse-grow">Multiplayer</button>
                <button onClick={this.handleClick_6}class="button button--exit hvr-pulse-grow">Sign out</button>

			</ul>
</form>
			</body>

);
}
}

