import React from "react";
import "../styles/HeaderNavBar.css";

function Headernavbar() {
  return (
    <div>
      <nav className="container">
        <a href="/">Tao</a>
        <a href="/projectList/">Projects</a>
        <a href="/aboutMe/">About Me</a>
        <a href="/contact/">Contact</a>
      </nav>
    </div>
  );
}

export default Headernavbar;
