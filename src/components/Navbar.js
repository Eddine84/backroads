import React from "react";
import Logo from "../images/logo.svg";
import { dataLinks, socialLinks } from "../data.js";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {dataLinks.map(({ id, href, text }) => {
            return (
              <li>
                <a href={href} className="nav-link" key={id}>
                  {" "}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(({ id, url, icon }) => {
            return (
              <li>
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
