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
            <div className="jumbotron col-lg-12">
            <div className="col-md-12 justify-content-center "id="text">
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
                    <p>Bachlor of Computer Information System</p>
                  <li>Nashville Software School</li>
                    <p>Web Software Developer</p>
              </ul>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default Resume;
