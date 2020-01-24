import React, { Component } from "react";
import firebase from './Firebase';
import { GoTrashcan, GoListUnordered } from 'react-icons/go';
import { FaLink } from 'react-icons/fa';
import { navigate } from "@reach/router";

class MeetingList extends Component {
    constructor(props) {
        super(props);
        this.deleteMeeting = this.deleteMeeting.bind(this);
    }

    deleteMeeting = (e, whichMeeting) => {
        e.preventDefault();
        const ref = firebase
        .database().ref(`meetings/${this.props.userID}/${whichMeeting}`);
        ref.remove();
    };



  render() {
    const { meetings } = this.props;
    const myMeetings = meetings.map(item => {
      return(
        <div className="list-group-item d-flex" key={item.meetingID}>

            <section className="btn-group align-self-center" role="group" arial-label="meeting option">
                <button classname="btn btn-sm-outline-secondary"
                title="Delete Meeting"
                onClick={e => this.deleteMeeting(e, item.meetingID)}
                >
                    <GoTrashcan />
                </button>
            </section>
            <section className="btn-group align-self-center" role="group" arial-label="meeting option">
                <button classname="btn btn-sm-outline-secondary"
                title="Check In"
                onClick={() => navigate(`/checkin/${this.props.userID}/${item.meetingID}`)}
                >
                    <FaLink />
                </button>
                <button classname="btn btn-sm-outline-secondary"
                title="Attendees List"
                onClick={() => navigate(`/attendees/${this.props.userID}/${item.meetingID}`)}
                >
                    <GoListUnordered />
                </button>
            </section>


          <section className="pl-3 text-left align-self-center">
            {item.meetingName}
          </section>
        </div>
      );
    });
    return <div>{myMeetings}</div>;
  }
}

export default MeetingList;
