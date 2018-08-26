import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';

class App extends Component {
  render() {
    return (
      <Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
				</div>
			</Router>
    );
  }
}

export default App;
 