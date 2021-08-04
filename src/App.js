import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home';
import about from './pages/about';
export class App extends Component {
  render() {
    return (
      <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={home} />
      <Route path='/about' exact component={about} />
      </Switch>
    </Router>
    )
  }
}

export default App
