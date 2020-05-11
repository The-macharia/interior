import React from "react";
import Card from "../UI/Card";

const ServiceRow = (props) => {

  return (
    <div className="row">
      {props.services.map((design) =>
        Object.entries(design).map((des) => (
          <Card title={des[1].title} subtitle={des[1].subtitle} key={design} />
        ))
      )}
    </div>
  );
};

export default ServiceRow;
