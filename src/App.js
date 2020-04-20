import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './styles';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

const def = () => (
  <div>
    <a href="/employees">Employess</a>
    <a href="/login">Login</a>
  </div>
);

const App = ({ isAuth = true }) => (
  <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route exact path="/" component={def} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/employees" component={isAuth ? Dashboard : Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
