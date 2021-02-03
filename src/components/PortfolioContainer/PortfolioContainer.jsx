import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import About from "../../containers/About/About";
import Contact from "../../containers/Contact/Contact";
import Portfolio from "../../containers/Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Home from "../../containers/Home/Home"
import "../../styles/style.css"

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else {
      return <Home />;
    }
  };

  render() {
    return (
      <div id="body">
            <Navbar
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            {this.renderPage()}
            <Footer />
         
      </div>
    );
  }
}

export default PortfolioContainer;
