import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <img
        className="nav__logo"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://cdn-icons-png.flaticon.com/128/3694/3694389.png"
        alt="Avatar logo"
      />
    </nav>
  );
}

export default Nav;
