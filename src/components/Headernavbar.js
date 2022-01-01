import React from "react";

function Headernavbar() {
  return (
    <div>
      <nav className="containerWithSpaceAround subtitle ">
        <a className="navText" href="/">
          <b>Tao</b>
        </a>
        <a className="navText" href="/projectList/">
          Projects
        </a>
        <a className="navText" href="/education/">
          Education
        </a>
        <a className="navText" href="/workExpreiences/">
          Work Experiences
        </a>
        <a className="navText" href="/Skills/">
          Skills
        </a>
        <a className="navText" href="/contact/">
          Contact
        </a>
        <div className="navText toggleNav">ShowAndHide</div>
      </nav>
    </div>
  );
}

export default Headernavbar;
