//client/routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/app';
import HomePage from './components/HomePage'

export const Routes = () => (
    <Switch>
      <Route exact path='/userData' component={App} />
      <Route exact path='/homepage' component={HomePage} />
    </Switch>
);
export default Routes;
