import React, { Component } from "react";
import firebase from './Firebase';
import {navigate} from '@reach/router';


class Checkin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });
  }

  handleSubmit(e) {
    e.preventDefault();

   const ref = firebase
   .database()
   .ref(`meetings/${this.props.userID}/${this.props.meetingID}/attendees`);
   ref.push({
       attendees: this.state.displayName,
       attendeesemail: this.state.email
   })
   navigate(`attendeed/${this.props.userID}/${this.props.meetingID}`)
  }
  render() {

    return (
    
    )
  }
}

export default Checkin;
