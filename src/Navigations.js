import React, { Component } from "react";
import {FaUsers} from 'react-icons/fa';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props;
    return (
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <a href="/"class="navbar-brand">
            <FaUsers className="mr-1" /> Meeting Log
            </a>
        <div class="navbar-nav ml-auto">
        {user && (
              <a
              class="nav-item nav-link"
              href="/meetings"  >meetings</a>
        )}
          {!user && (
                    <a
                    class="nav-item nav-link"
                    href="/login">log in</a>
          )}
          {!user && (

          <a
            class="nav-item nav-link"
            href="/register">register</a>
          )}
          {user && (

          <a
            class="nav-item nav-link" href="login">
            logout
          </a>
          )}
        </div>
      </div>
    </nav>

    );
  }
}

export default Navigation;
