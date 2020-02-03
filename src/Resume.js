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
              <h2> Work Experiences</h2>
              <ul>
                  <li>Ceve logistics</li>
                  <li>Dell Technology</li>
                  <li>IBM </li>
              </ul>
              <h2> Education</h2>
              <ul>
                  <li>Middle Tennesseee University</li>
                  <li>Nashville Software School</li>
              </ul>
            </div>
          </div>
          
        </div>
    );
  }
}

export default Resume;
