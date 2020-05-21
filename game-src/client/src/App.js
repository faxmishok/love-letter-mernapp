import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Menu from "./components/menu.component";
import Solo from "./components/solo.component";
import Cooperative from "./components/cooperative.component";
import Game from "./components/game.component";

function App() {
  return (
    <Router>
       	 <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
          <Route path="/menu" component={Menu} />
          <Route path="/solo" component={Solo} />
          <Route path="/cooperative" component={Cooperative} />
          <Route path="/game/:id" component={Game} />


    </Router>
  );
}

export default App;
