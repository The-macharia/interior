import React, { Component } from "react";
import Nav from "../components/Navigation/Nav";
import Image1 from "../assets/img2.jpg";
import classes from './Containers.module.css';
import Button from "../components/UI/Button";


class Header extends Component {
  state = {
    links: ["home", "about", "services", "pricing", "contact"],
  };

  buttonClickHandler = () => {
      console.log('working')
  }

  render() {
    const styles = {
      backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.8), rgba(0,0,0, 0.4)), url(${Image1})`,
    };

    return (
      <header style={styles} className={classes.Header}>
        <Nav links={this.state.links} />
        <div className={classes.Header__card}>
          <h1 className={classes.Header__card__h1}>
            Precise Concept Designs <br />
            For Stylish Living.
          </h1>
          <Button clicked={this.buttonClickHandler}>Check Pricing</Button>
        </div>
      </header>
    );
  }
}

export default Header;
