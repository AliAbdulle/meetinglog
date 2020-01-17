import React, { Component } from 'react';
import {Router} from '@reach/router';
import firebase from './Firebase.js';


import Home from './Home';
import Welcome from './Welcome';
import Navigations from './Navigations';
import Login from './Login';
import Register from './Register';
import Meetings from './Meetings' ;

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }
  componentDidMount(){
    const ref = firebase.database().ref('user');

    ref.on('value', snapshot => {
      let FBuser = snapshot.val();
      this.setState({user: FBuser});
    })
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