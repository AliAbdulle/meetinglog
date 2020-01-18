import React, { Component } from 'react';
import {Router, navigate} from '@reach/router';
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
      user: null,
      displayName: null,
      userID: null
    }
  }
  componentDidMount(){
    const ref = firebase.database().ref('user');

    ref.on('value', snapshot => {
      let FBuser = snapshot.val();
      this.setState({user: FBuser});
    })
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBuser => {
      FBuser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBuser,
          displayName: FBuser.displayName,
          userID: FBuser.uid
        });
        navigate('./meetings');
      })
    })
  }
  render() {
    return (
      <div>
        <Navigations user={this.state.user}/>
        {this.state.user &&<Welcome user={this.state.displayName}/>}
        <Router>

        <Home path="/" user={this.state.user}/>
        <Login path="/login" user={this.state.user}/>
        <Meetings path="/meetings" />
        <Register path="/register" registerUser = {this.registerUser} />
        </Router>
      </div>
    );
  }
}
export default App;