import React from "react";
import Image from "../../assets/map.png";
import classes from "./Ui.module.css";
import Aux from "../../hoc/Aux";
import { Paper } from "@material-ui/core";
import CountUp from "react-countup";

const ColGrid = (props) => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const spanStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Aux>
      <div className="row">
        <div className="col-md-6 my-3" style={styles}>
          <img src={Image} className={classes.Image} alt="Describing About" />
        </div>
        <div className="col-md-6 my-3" style={styles}>
          <div style={{ padding: "1rem 1.5rem" }}>
            <h1>
              We Bring The Bright Out <br /> Of You
            </h1>
            <p>
              Jowagi agency is a growing, registered, professional interior
              design and landscaping company in Kenya, serving the whole of East
              Africa.Our expertise ranges across multiple design styles and we
              are highly competent to giving life and bringing the magic to any
              space. Whether you're looking for the best designs possible for
              commercial, retail, offices, residential, hotels and clubs we are
              always ready to offer the best services with creative designs.
              <br />
              Whether renovating or construction we always make your
              satisfaction out first priority. Our project is the only baby we
              spoils and pamper to make sure we give you the best services in
              the market.
            </p>
          </div>
        </div>
      </div>

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

      <div className="row justify-content-center">
        {props.stats.map((design) =>
          Object.entries(design).map((des) => (
            <div className="col text-center my-3" key={design}>
              <div
                className="card d-flex flex-row"
                style={{ padding: "1rem 1.5rem" }}
              >
                <span style={spanStyles}>{des[1].icon}</span>
                <div className="w-100">
                  <h5
                    className="card-title text-center w-100"
                    style={{ fontSize: "4rem" }}
                  >
                    <CountUp start={0} end={+des[1].title} delay={1} />+
                  </h5>
                  <p
                    className="card-text text-center w-100"
                    style={{ fontSize: "2rem" }}
                  >
                    {des[1].subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Aux>
  );
};

export default ColGrid;
