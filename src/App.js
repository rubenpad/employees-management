import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { GlobalStyles } from './styles';
import Layout from './components/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NewEmployee from './pages/NewEmployee';
import EditEmployee from './pages/EditEmployee';
import NotFound from './pages/NotFound';

const IS_LOGGED_IN = gql`
  query {
    isLoggedIn @client
  }
`;

const App = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  const isAuth = data.isLoggedIn;

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout isAuth={isAuth}>
        <Switch>
          <Route exact path="/" component={isAuth ? Main : Login} />
          <Route exact path="/login" component={isAuth ? Main : Login} />
          <Route exact path="/signup" component={isAuth ? Main : Signup} />
          <Route
            exact
            path="/employees"
            component={isAuth ? Dashboard : Login}
          />
          <Route
            exact
            path="/employees/new"
            component={isAuth ? NewEmployee : Login}
          />
          <Route
            exact
            path="/employees/edit/:id"
            component={isAuth ? EditEmployee : Login}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
