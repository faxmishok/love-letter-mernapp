import React, { Component } from "react";
import { withRouter,Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cooperative.css';
import axios from "axios";
import io from 'socket.io-client';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Cooperative extends Component {
    state = {
        error: null,
        gameId: null,
        waiting: false,
        whiteId: null,
        id: '',
        username: '',
      }
      
      handleChangeId = event =>{
        this.setState({id: event.target.value})
    }

      handleChangeName = event =>{
        this.setState({username: event.target.value})
    }

    componentDidMount() {
    this.socket = io('http://localhost:5000');

    this.socket.on('connection', () => {
      console.log('CONNECTED');
    });

    this.socket.on('START_GAME', (game) => {
      const {
        id
      } = this.state;
      this.props.history.push({
        pathname : `/game/${game.id}`,
        search: `?userId=${id}`
    
    });
    });
  }

  componentWillUnmount() {
    this.socket.removeAllListeners();
    this.socket.close();
  }

  createGame = (event) => {
    event.preventDefault();

    
    const { username,id } = this.state;
    const data = {
      userId: id,
      username: username,
    };
    this.socket.emit('CREATE_GAME', data);
    this.setState({ waiting: true }, () => {
      console.log("client");

      setTimeout(() => {

        this.socket.on('RECEIVE_GAME', (game) => {
          this.socket.on('RECEIVE_GAME', (game) => {
            this.socket.on('RECEIVE_GAME', (game) => {
          console.log("client",game);
          this.receiveGame(game);
            });
        });
      });
      }, 500);
      this.stopWaiting = setTimeout(() => {
        this.socket.removeListener('RECEIVE_GAME');
        this.setState({
          error: 'Could not find an opponent at this time',
          waiting: false,
        });
        setTimeout(() => {
          this.setState({ error: null });
        }, 2000);
      }, 20000);
    });
  }

  receiveGame = (game) => {
    clearTimeout(this.stopWaiting);
    this.setState({ waiting: false }, () => {
      this.socket.removeListener('RECEIVE_GAME');
      this.socket.emit('JOIN_GAME', game);
    });
    this.setState({
      gameId: game.id,
      whiteId: game.userId,
    });
  }
    render() {    
        const {
        error,
        gameId,
        waiting,
        whiteId,
      } = this.state;
  
      const { user } = this.props;
  
      const redirect = gameId ?
        <Redirect to={`/cooperative/${gameId}`} />
        :
        null;
  
      const buttonText = waiting ? 'Looking for Opponent' : 'Find Opponent';
      const errorMessage = error ?
        (
          <p style={{ color: 'red' }}>{error}</p>
        ) : null;
  
        return (
                <div className="bcksigup">

    <div className="App"  >

      <div className="auth-wrapper">
        <div className="auth-inner">
           <form>
                <h3>Chat</h3>

                { this.state.errorMessage &&
                <h3 className="error"> { this.state.errorMessage } </h3> }
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" onChange={this.handleChangeName}/>
                </div>

                <div className="form-group">
                <label>Id</label>
                    <input type="text" placeholder="Enter userid" onChange={this.handleChangeId}/>
                </div>

                <button
          disabled={waiting}
          onClick={this.createGame}
        >
          {buttonText}
        </button>
            </form>
            </div>
            </div>
            </div>
            </div>
        );
    }
}
