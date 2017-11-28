import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="logo">
      <Link to={`/`}>GDAZ</Link>
    </div>
    <div className="menu">
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/stock`}>Stock</Link>
        </li>
        <li>
          <Link to={`/latlong`}>Map</Link>
        </li>
        <li>
          <Link to={`/`}>IoT</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
