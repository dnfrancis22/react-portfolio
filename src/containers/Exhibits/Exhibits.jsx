import React from "react";
import "./Exhibits.css"
import namb1 from "../../assets/namb1.jpg";
import namb1b from "../../assets/namb1b.jpg";
import namb1c from "../../assets/namb1c.jpg";
import namb1d from "../../assets/namb1.jpg";
import leadingAgile1 from "../../assets/leadingAgile1.jpg";
import leadingAgile2 from "../../assets/leadingAgile2.jpg";
import bibliotheca1 from "../../assets/bibliotheca1.jpg";
import bibliotheca2 from "../../assets/bibliotheca2.jpg";
import ricoh1 from "../../assets/ricoh1.jpg";
import ricoh3 from "../../assets/ricoh3.jpg";

const Exhibits = () => {
  return (
    <div>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={namb1} className="d-block exhibit" alt="namb1" />
            </div>
            <div className="carousel-item">
              <img src={namb1b} className="d-block exhibit" alt="namb1b" />
            </div>
            <div className="carousel-item">
              <img src={namb1c} className="d-block exhibit" alt="namb1c" />
            </div>
            <div className="carousel-item">
              <img src={namb1d} className="d-block exhibit" alt="namb1d" />
            </div>
            <div className="carousel-item">
              <img src={leadingAgile1} className="d-block exhibit" alt="leadingAgile1" />
            </div>
            <div className="carousel-item">
              <img src={leadingAgile2} className="d-block exhibit" alt="leadingAgile2" />
            </div>
            <div className="carousel-item">
              <img src={bibliotheca1} className="d-block exhibit" alt="bibliotheca1" />
            </div>
            <div className="carousel-item">
              <img src={bibliotheca2} className="d-block exhibit" alt="bibliotheca2" />
            </div>
            <div className="carousel-item">
              <img src={ricoh1} className="d-block exhibit" alt="ricoh1" />
            </div>
            <div className="carousel-item">
              <img src={ricoh3} className="d-block exhibit" alt="ricoh3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exhibits;
