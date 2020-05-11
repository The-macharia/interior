import React from "react";
import { Paper } from "@material-ui/core";

const RowCards = (props) => (
  <div className="row">
    {props.mantras.map((mantra) =>
      Object.entries(mantra).map((mant) => (
        <div className="col-md-4 my-4 text-center" key={mant[0]}>
          <Paper className="card" elevation={1}>
            <div className="card-body">
              <h5 className="card-title">{mant[0]}</h5>
              <p className="card-text">{mant[1]}</p>
            </div>
          </Paper>
        </div>
      ))
    )}
  </div>
);

export default RowCards;
