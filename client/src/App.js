import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './styles';
import Layout from './components/Layout';
import Home from './containers/Home';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Register from './containers/Register';

const App = ({ isAuth = false}) => (
  <BrowserRouter>
    <GlobalStyles />
    <Layout isAuth={isAuth}>
      <Switch>
        <Route exact path="/" component={isAuth ? Home : Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/employees" component={isAuth ? Dashboard : Login} />
        <Route
          exact
          path="/employees/new"
          component={isAuth ? Register : Login}
        />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
