import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [handle, setHandle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandle(true);
      } else {
        setHandle(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav ${handle && "nav__black"}`}>
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
