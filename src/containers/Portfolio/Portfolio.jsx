import React from "react";
import Card from "../../components/Card/Card";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Portfolio</h1>
          <Card
            image="./assets/theInspirator.png"
            title="The Inspirator"
            description="The Inspirator is an application to help unlock creativity for persons needing a fresh approach. This site provides a different perspective to help continue or initiate a project, from writing a song to plotting a story. "
            github="https://github.com/dnfrancis22/GT-Project1"
            deployedSite="https://dnfrancis22.github.io/GT-Project1/"
          />
          <Card
            image="./assets/theInspirator.png"
            title="The Inspirator"
            description="The Inspirator is an application to help unlock creativity for persons needing a fresh approach. This site provides a different perspective to help continue or initiate a project, from writing a song to plotting a story. "
            github="https://github.com/dnfrancis22/GT-Project1"
            deployedSite="https://dnfrancis22.github.io/GT-Project1/"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
