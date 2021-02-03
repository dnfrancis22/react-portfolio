import React from "react";
import "./Navbar.css";

function NavBar(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navbar"
      >
          <a
            className="nav-item"
            href="#Home"
            onClick={() => props.handlePageChange("Home")}
            className={
              props.currentPage === "Home" ? "nav-link active" : "nav-link"
            }
          >
            <h3>Dennis Francis</h3>
          </a>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a
              className="nav-item"
              href="#About"
              onClick={() => props.handlePageChange("About")}
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
              className={
                props.currentPage === "Portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </a>
            {/* <a
              className="nav-item"
              href="#Contact"
              onClick={() => props.handlePageChange("Contact")}
              className={
                props.currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a> */}
            <a
              className="nav-link"
              href="https://docs.google.com/document/d/1MZ_OTMBpeteeMLyJbuGzgmT9NBKnAI1Qt-k5Pt69K1Y/edit?usp=sharing"
              download
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
