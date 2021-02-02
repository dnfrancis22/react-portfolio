import React from "react";

function NavBar(props) {
  return (
    <>
      {/* <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => props.handlePageChange("Portfolio")}
          className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
    </ul> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          {/* <a
            className="nav-item"
            href="#About"
            onClick={() => props.handlePageChange("About")}
            className={
              props.currentPage === "About" ? "nav-link active" : "nav-link"
            }
          >
            Dennis Francis
          </a> */}
          <h3>Dennis Francis</h3>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a
              className="nav-item"
              href="#Contact"
              onClick={() => props.handlePageChange("Contact")}
              className={
                props.currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
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
