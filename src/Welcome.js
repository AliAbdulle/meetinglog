import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props;
    return (
        <div className="text-center">
      <span className="text-secondary font-weight-bold pl-1">
          Welcome {user}
      </span>
      ,
        <a href="/" className="font-weight-bold text-primary pl-1">
          logout
        </a>
      </div>
    );
  }
}

export default Welcome;
