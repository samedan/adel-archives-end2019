// rfc
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './SideBar';

export default function Navbar() {
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <Link to="/" className="brand-logo">
              Starter
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
