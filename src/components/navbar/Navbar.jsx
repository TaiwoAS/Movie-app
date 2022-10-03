import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">MOVIE LIST</Link>
          </div>
          <ul clasName="nav-links">
            <li>
              <Link to="/">MOVIES</Link>
            </li>
            <li>
              <Link to="/series">SERIES</Link>
            </li>
            <li>
              <Link to="/tvshows">TV SHOWS</Link>
            </li>
            <li>
              <Link to="/add" classname="btn">
                ADD
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
