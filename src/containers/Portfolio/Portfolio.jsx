import React from "react";
import Card from "../../components/Card/Card"

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Portfolio</h1>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
