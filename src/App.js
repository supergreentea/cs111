import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import StackDemo from './components/StackDemo'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/stackdemo' component={StackDemo} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
