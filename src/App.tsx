import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
  </Switch>
);

export default App;
