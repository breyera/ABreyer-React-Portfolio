import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./style.css";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-md navbar-dark">
        <a href="/react-portfolio" className="navbar-brand left-nav">
          Alicia Breyer
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <AnchorLink
                href="#about"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                className={
                  window.location.pathname === "#about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                href="#portfolio"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                className={
                  window.location.pathname === "#portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                href="#connect"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                className={
                  window.location.pathname === "#connect"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Connect
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
