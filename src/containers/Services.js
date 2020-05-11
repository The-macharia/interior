import React, { Component } from "react";
import Heading from "../components/UI/Heading";
import ServiceRow from "../components/UI/ServiceRow";
import classes from "./Containers.module.css";
import Button from "../components/UI/Button";

class Services extends Component {
  state = {
    services: [
      {
        interior: {
          title: "Interior Design",
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        land: {
          title: "Land Scaping",
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        concept: {
          title: "Concept Design",
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        arch: {
          title: "Architecture Design",
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        tree: {
          title: "Tree Planting",
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
    ],
    unique: [
      {
        interior: {
          title: "Expert Technicians",
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        land: {
          title: "Professional Service",
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        concept: {
          title: "Great Support",
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        arch: {
          title: "Technical Skills",
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        tree: {
          title: "Positive Reviews",
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        recommend: {
          title: "Highly Recommended",
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
    ],
  };

  render() {
    return (
      <section id="services" className={classes.Services}>
        <div className="container">
          <Heading title={"Our Services"} subtitle={"We Make It Happen"} />
          <ServiceRow services={this.state.services} />
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#04091E",
            color: "#ccc",
            padding: "2rem 0",
          }}
        >
          <div className="container d-flex flex-sm-column">
            <div className="col-md-8 col-sm-12">
              <h1>Get to Know A Project Estimate</h1>
              <span>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere earum magni nemo fugiat. Provident accusamus cupiditate
                  repellendus numquam, ipsum culpa quia possimus ratione
                  adipisci expedita, obcaecati quidem sapiente qui dolores.
                </p>
              </span>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <Button style={{ border: "1px solid darkorange" }}>
                Request A Quote
              </Button>
            </div>
          </div>
        </div>
        <div className="container">
          <Heading
            title={"What Makes Us Unique"}
            subtitle={"We Make It Happen"}
          />
          <ServiceRow services={this.state.unique} />
        </div>
      </section>
    );
  }
}

export default Services;
