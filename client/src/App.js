import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './styles';
import Layout from './components/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NewEmployee from './pages/NewEmployee';
import EditEmployee from './pages/EditEmployee';

const App = ({ isAuth = false }) => (
  <BrowserRouter>
    <GlobalStyles />
    <Layout isAuth={isAuth}>
      <Switch>
        <Route exact path="/" component={isAuth ? Main : Login} />
        <Route exact path="/login" component={isAuth ? Main : Login} />
        <Route exact path="/signup" component={isAuth ? Main : Signup} />
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
