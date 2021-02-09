import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '..';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
