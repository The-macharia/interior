import React, { Component } from "react";
import Nav from "../components/Navigation/Nav";
import Image from "../assets/img2.jpg";
import classes from "./Containers.module.css";
import Button from "../components/UI/Button";

class Header extends Component {
  buttonClickHandler = () => {
    console.log("working");
  };

  render() {
    const styles = {
      backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.8), rgba(0,0,0, 0.4)), url(${Image})`,
    };

    return (
      <header id="home" style={styles} className={classes.Header}>
        <Nav links={this.props.links} />
        <div className={classes.Header__card}>
          <h1 className={classes.Header__card__h1}>
            Concept Designs <br />
            For Stylish Living.
          </h1>
          <Button variant={"outlined"} href={"#contact"}>
            Contact Us
          </Button>
        </div>
      </header>
    );
  }
}

export default Header;
