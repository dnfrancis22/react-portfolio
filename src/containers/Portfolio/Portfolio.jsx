import React from "react";
import Card from "../../components/Card/Card";
import "../../styles/style.css";
import Insp from "../../assets/theInspirator.png";
import Ft from "../../assets/food-truck-chasers.png";
import Wa from "../../assets/weatherApp.png";
import Plan from "../../assets/planner.jpeg";
import Burger from "../../assets/burgerApp.png";
import Et from "../../assets/employeeTracker.png";

const Portfolio = () => {
  return (
    <>
      <section className="py-5 text-center container homeCont">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">My Portfolio</h1>
            <p className="lead text">
              Experience working in multiple Web programming
              languages, tools, and technologies such as HTML, CSS, JavaScript,
              Express, React, ES6, jQuery, SQL, NoSQL, Github, MongoDB,
              Mongoose, MySQL, Sequelize, Handlebars, Bootstrap, Materialize,
              Foundation, and Adobe Creative Suite, Graphic Design, Strata 3D
              CX, 3D Design.
            </p>
          </div>
        </div>
      </section>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Card
              image={Insp}
              title="The Inspirator"
              description="The Inspirator is an application to help unlock creativity for persons needing a fresh approach. This site provides a different perspective to help continue or initiate a project, from writing a song to plotting a story. "
              github="https://github.com/dnfrancis22/GT-Project1"
              deployedSite="https://dnfrancis22.github.io/GT-Project1/"
            />
            <Card
              image={Ft}
              title="Food Truck Chasers"
              description="Food truck chasers is an application where users in a city can chase all the food trucks in their area by searching by zip code and food category. For food truck operators it is a application to help drive traffic to their food trucks and create an awareness of where they are on any given day."
              github="https://github.com/dnfrancis22/FoodTruck-Chasers"
              deployedSite="https://glacial-ocean-57671.herokuapp.com/"
            />
            <Card
              image={Wa}
              title="The Weather Dashboard"
              description="This is a weather app. You can search for a city and get the current weather as well as a five forecast. The users search will be generated into a button that can be clicked and the weather information for that city will be recalled."
              github="https://github.com/dnfrancis22/weather-dashboard"
              deployedSite="https://dnfrancis22.github.io/weather-dashboard/"
            />
            <Card
              image={Plan}
              title="The Work Day Scheduler"
              description="This is a daily planner created to give busy workers a way to manage their day."
              github="https://github.com/dnfrancis22/work-day-planner"
              deployedSite="https://dnfrancis22.github.io/work-day-planner/"
            />
            <Card
              image={Burger}
              title="The Eat Da Burger App"
              description="This app simply allows you to create a burger, and devour the burger."
              github="https://github.com/dnfrancis22/burger"
              deployedSite="https://polar-brook-84844.herokuapp.com/"
            />
            <Card
              image={Et}
              title="Employee Directory"
              description="This app allows you to view your employee directory. You can sort by name ascending or descending. You can also filter by number."
              github="https://github.com/dnfrancis22/employee-directory"
              deployedSite="https://dnfrancis22.github.io/employee-directory/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
