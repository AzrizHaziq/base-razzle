import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
  </Switch>
);

export default App;
