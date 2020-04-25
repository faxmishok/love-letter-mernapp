import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Menu from "./components/menu.component";
import Solo from "./components/solo.component";

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
    </Router>
  );
}

export default App;
