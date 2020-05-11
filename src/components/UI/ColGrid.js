import React from "react";
// import Grid from "@material-ui/core/Grid";
import Image from "../../assets/map.png";
// import Paper from "@material-ui/core/Paper";
import classes from "./Ui.module.css";
import Aux from "../../hoc/Aux";
import { Paper } from "@material-ui/core";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const ColGrid = (props) => {
  const styles = {
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
              If you are looking at blank cassettes on the web lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam. Eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. If you are looking at blank
              cassettes on the web lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        {props.mantras.map((mantra) =>
          Object.entries(mantra).map((mant) => (
            <div className="col-md-4 my-4 text-center" key={mant[0]}>
              <Paper  className="card" elevation={1}>
                <div className="card-body">
                  <h5 className="card-title">{mant[0]}</h5>
                  <p className="card-text">{mant[1]}</p>
                </div>
              </Paper>
            </div>
          ))
        )}
      </div>

      <div className="row">
        <div className="col-md-4 text-center">
            <div className="card d-flex flex-row">
              <span><EmojiEmotionsIcon style={{color: '#C6AD63', fontSize: '6rem'}}/></span>
              <div className="w-100">
                <h5 className="card-title text-center w-100">Happy Customers</h5>
                <p className="card-text text-center w-100">Happy Customers</p>
              </div>
            </div>
        </div>
        <div className="col-md-4 text-center">
            <div className="card d-flex flex-row">
              <span><EmojiEmotionsIcon style={{color: '#C6AD63', fontSize: '6rem'}}/></span>
              <div className="w-100">
                <h5 className="card-title text-center w-100">Projects Completed</h5>
                <p className="card-text text-center w-100">Projects Completed</p>
              </div>
            </div>
        </div>
        <div className="col-md-4 text-center">
            <div className="card d-flex flex-row">
              <span><EmojiEmotionsIcon style={{color: '#C6AD63', fontSize: '6rem'}}/></span>
              <div className="w-100">
                <h5 className="card-title text-center w-100">Years Of Experience</h5>
                <p className="card-text text-center w-100">Years Of Experience</p>
              </div>
            </div>
        </div>
      </div>
    </Aux>
  );
};

export default ColGrid;
