import React from "react";
import "./Navbar.css";

function NavBar(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navbar"
      >
        <div className="container-fluid">
          <a
            className="nav-item"
            href="#Home"
            onClick={() => props.handlePageChange("Home")}
            // eslint-disable-next-line
            className={
              props.currentPage === "Home" ? "nav-link active" : "nav-link"
            }
          >
            <h3>Dennis Francis</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ml-auto">

              <a
                className="nav-item"
                href="#About"
                onClick={() => props.handlePageChange("About")}
                // eslint-disable-next-line
                className={
                  props.currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>

              <a
                className="nav-item"
                href="#Portfolio"
                onClick={() => props.handlePageChange("Portfolio")}
                // eslint-disable-next-line
                className={
                  props.currentPage === "Portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </a>
              <a
                className="nav-link"
                href="https://docs.google.com/document/d/1MZ_OTMBpeteeMLyJbuGzgmT9NBKnAI1Qt-k5Pt69K1Y/edit?usp=sharing"
                download
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
