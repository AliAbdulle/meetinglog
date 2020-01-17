import React, { Component } from 'react';
import Home from './Home';
import Welcome from './Welcome';
import Navigations from './Navigations';
import Login from './Login';
import Register from './Register';
import Meetings from './Meetings' ;
import {Router} from '@reach/router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Ali  '
    }
  }
  render() {
    return (
      <div>
        <Navigations user={this.state.user}/>
        {this.state.user &&<Welcome user={this.state.user}/>}
        <Router>

        <Home path="/" user={this.state.user}/>
        <Login path="/login" user={this.state.user}/>
        <Meetings path="/meetings" />
        <Register path="/register" />
        </Router>
      </div>
    );
  }
}
export default App;