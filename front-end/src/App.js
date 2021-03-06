import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import { Button } from 'antd-mobile';
import City from './City'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button type="primary">primary</Button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <City/>
      </div>
    );
  }
}

export default App;
