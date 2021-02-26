import React from 'react';
import "./Card.css"

const Card = (props) => {
    return (
      
 <>
 <div class="col">
 <div className="card shadow-sm" id="card">
  <img src={props.image} className="card-img-top" alt={props.title}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
  </div>
  <div className="card-body">
    <a href={props.github} className="card-link">Github</a>
    <a href={props.deployedSite} className="card-link">Deployed Site</a>
  </div>
</div>
</div>
 </>
    
    );
};

export default Card;