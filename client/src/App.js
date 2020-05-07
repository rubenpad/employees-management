import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './styles';
import Layout from './components/Layout';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Dashboard from './containers/Dashboard';
import NewEmployee from './containers/NewEmployee';
import EditEmployee from './containers/EditEmployee';

const App = ({ isAuth = true }) => (
  <BrowserRouter>
    <GlobalStyles />
    <Layout isAuth={isAuth}>
      <Switch>
        <Route exact path="/" component={isAuth ? Home : Login} />
        <Route exact path="/login" component={isAuth ? Home : Login} />
        <Route exact path="/signup" component={isAuth ? Home : Signup} />
        <Route exact path="/employees" component={isAuth ? Dashboard : Login} />
        <Route
          exact
          path="/employees/new"
          component={isAuth ? NewEmployee : Login}
        />
        <Route
          exact
          path="/employees/edit"
          component={isAuth ? EditEmployee : Login}
        />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
