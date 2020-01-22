import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
import firebase from "./Firebase.js";

import Home from "./Home";
import Welcome from "./Welcome";
import Navigations from "./Navigations";
import Login from "./Login";
import Register from "./Register";
import Meetings from "./Meetings";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      displayName: null,
      userID: null
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        const meetingsRef = firebase
        .database()
        .ref(`meetings/` + FBUser.uid);

        meetingsRef.on('value', snapshot => {
          let meetings = snapshot.val();
          let meetingsList = [];

          for(let item in meetings) {
            meetingsList.push({
              meetingsI: item,
              meetingName: meetings[item].meetingName
            })
          }
          this.setState({
            meetings: meetingsList,
            howManyMeetings: meetingsList.length
          })
        })

      }else{
        this.setState({user: null})
      }

    });
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate("./meetings");
      });
    });
  };

  logoutUser = e => {
    e.preventDefault();
    this.setState({
      displayName: null,
      userID: null,
      user: null
    });

    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate('/login');
      });
  };

  addMeeting = meetingName => {
    const ref = firebase
    .database()
    .ref(`meetings/${this.state.user.uid}`);
    ref.push({meetingName: meetingName});

  }

  render() {
    return (
      <div>
        <Navigations user={this.state.user} logoutUser={this.logoutUser} />
        {this.state.user && (
          <Welcome
            userName={this.state.displayName}
            logoutUser={this.logoutUser}
          />
        )}
        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" user={this.state.user} />
          <Meetings path="/meetings" 
          meetings={this.state.meetings}
          addMeeting={this.addMeeting}/>
          <Register path="/register" registerUser={this.registerUser} />
        </Router>
      </div>
    );
  }
}
export default App;
