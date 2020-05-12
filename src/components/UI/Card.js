import React from "react";

const Card = (props) => (
  <div className="col-md-4 col-sm-6 my-4 text-center">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          <span style={{marginRight: '1rem'}}>{props.icon}</span>
          <span>{props.title}</span>
        </h5>
        <p className="card-text">{props.subtitle}</p>
      </div>
    </div>
  </div>
);

export default Card;
