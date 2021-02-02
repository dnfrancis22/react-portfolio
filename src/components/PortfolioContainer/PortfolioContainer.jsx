import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import About from "../../containers/About/About";
import Contact from "../../containers/Contact/Contact";
import Portfolio from "../../containers/Portfolio/Portfolio";
import Footer from "../Footer/Footer";

class PortfolioContainer extends Component {
  state = {
    currentPage: "About",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else {
      return <About />;
    }
  };

  render() {
    return (
      <>
            <Navbar
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            {this.renderPage()}
            <Footer />
         
      </>
    );
  }
}

export default PortfolioContainer;
