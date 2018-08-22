import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cars from './Cars'
import AddCar from './AddCar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddCar />
        <Cars />
      </div>
    );
  }
}

export default App;
