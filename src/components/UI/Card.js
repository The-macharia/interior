import React from "react";

const Card = (props) => (
  <div className="col-md-4 col-sm-6 my-4 text-center">
    <div className="card">
      <div className="card-body">
        <div className="card-title">{props.title}</div>
        <div className="card-text">{props.subtitle}</div>
      </div>
    </div>
  </div>
);

export default Card;
