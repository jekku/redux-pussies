import React, { Component } from 'react';
import { pussyList } from './stores/pussyList';

class App extends Component {
  render () {
    console.log(pussyList.getState());
    return (
      <h1> HELLO WORLD </h1>
    );
  }
};

export default App;

