import React, { Component } from "react";
import {FaUsers} from 'react-icons/fa';
import {Link} from '@reach/router';

class Navigations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props;
    return (
    <nav className="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div className="container-fluid">
        <Link to="/"className="navbar-brand">
            <FaUsers className="mr-1" /> Meeting Log
            </Link>
        <div className="navbar-nav ml-auto">
        {user && (
              <Link
              className="nav-item nav-link"
              to="/meetings"  >meetings</Link>
        )}
          {!user && (
                    <Link
                    className="nav-item nav-link"
                    to="/login">log in</Link>
          )}
          {!user && (

          <Link
            className="nav-item nav-link"
            to="/register">register</Link>
          )}
          {user && (

          <Link
            className="nav-item nav-link" to="login">
            logout
          </Link>
          )}
        </div>
      </div>
    </nav>

    );
  }
}

export default Navigations;
