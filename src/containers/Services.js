import React, { Component } from "react";
import Heading from "../components/UI/Heading";

class Services extends Component {
  render() {
    return (
      <section id="section">
        <div className="container">
          <Heading title={"Our Services"} subtitle={"We Make It Happen"} />
        </div>
      </section>
    );
  }
}

export default Services;
