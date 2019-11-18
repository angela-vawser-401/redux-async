import React from './node_modules/react';
import {
  BrowserRouter as Router, Switch, Route } from './node_modules/react-router-dom';
import Header from './Header';
import DisplayCharacters from '../containers/DisplayCharacters';
import DisplayCharacterDetail from '../containers/DisplayCharacterDetail';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={DisplayCharacters} />
        <Route path="/characters/:name" component={DisplayCharacterDetail} />
      </Switch>
    </Router>
  );
}
