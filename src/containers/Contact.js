import React, { Component } from "react";
import classes from "./Containers.module.css";
import Heading from "../components/UI/Heading";
import Form from "../components/Form/Form";

class Contact extends Component {
  render() {
    return (
      <section id="contact" className={classes.Contact}>
        <div className="container">
          <Heading title={"Talk To Us"} subtitle={"We Make It Happen"} />
          <Form />
        </div>
      </section>
    );
  }
}

export default Contact;
