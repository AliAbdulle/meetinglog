import React, { Component } from "react";
import { Link } from "@reach/router";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userName, logOutUser } = this.props;
    return (
        <div className="text-center">
      <span className="text-secondary font-weight-bold pl-1">
          Welcome {userName}
      </span>
      ,
        <Link to="/login" className="font-weight-bold text-primary pl-1"
        onClick={e => logOutUser(e)}>
          logout
        </Link>
      </div>
    );
  }
}

export default Welcome;
