import React, { Component } from 'react';
import Home from './Home';
import Welcome from './Welcome';
import Navigations from './Navigations';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }
  render() {
    return (
      <div>
        <Navigations user={this.state.user}/>
        {this.state.user &&<Welcome user={this.state.user}/>}
        <Home user={this.state.user}/>
      </div>
    );
  }
}
export default App;