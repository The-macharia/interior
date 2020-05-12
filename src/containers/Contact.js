import React, { Component } from "react";
import classes from "./Containers.module.css";
import Heading from "../components/UI/Heading";
import Form from "../components/Form/Form";
import Image from "../assets/img9.jpg";

class Contact extends Component {
  render() {
      const styles ={
        backgroundImage: `linear-gradient(to right, rgba(0,0,0), rgba(0,0,0, 0.8)), url(${Image})`,
    }
    return (
      <section id="contact" className={classes.Contact} style={styles}>
        <div className="container">
          <Heading title={"Talk To Us"} subtitle={"We Make It Happen"} />
          <Form />
        </div>
      </section>
    );
  }
}

export default Contact;
