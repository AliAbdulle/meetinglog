import React, { Component } from "react";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="jumbotron">
              <h1 className="text-title">
                About Me
              </h1>
              <p>This meeting is provided my the company name LinkIN Came</p>
            </div>
          </div>
          
        </div>
    );
  }
}

export default Resume;
