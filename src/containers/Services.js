import React, { Component } from "react";
import Heading from "../components/UI/Heading";
import ServiceRow from "../components/UI/ServiceRow";
import classes from "./Containers.module.css";
import Button from "../components/UI/Button";
import PeopleIcon from "@material-ui/icons/People";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import InvertColorsIcon from '@material-ui/icons/InvertColors';
import CommentIcon from "@material-ui/icons/Comment";
import EcoIcon from "@material-ui/icons/Eco";
import LayersIcon from "@material-ui/icons/Layers";
class Services extends Component {
  state = {
    services: [
      {
        interior: {
          title: "Interior Design",
          subtitle:
            "We make your home interior beautiful, safe and comfortable for your stay. We creatively determine the requirements of the space available and select essential, beautiful and decorative concepts such as paints and lighting. You will always want to come Home🏡",
        },
      },
      {
        land: {
          title: "Land Scaping",
          subtitle:
            "We create visual attraction in layering, texture contrast, colour and bloom. We improve your outdoor space by planning, designing and modifying the visible features in your environment which entails the flora and fauna to bring joy, beauty, symmetry, balance to nature and a peaceful place to stroll on. We execute hardscapes, walkways,play areas, fences, herb gardens, pools, fountains, landscape, garden lighting and keeping pollinators alive by planting flowers.",
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
            "We transfer tree seedlings based on our clients needs and purpose but generally for landscaping purposes, land reclamation or forestry. We help our clients plant and maintain the tree seedlings till maturity. We also offer advice on how to maintain the tree seedlings.",
        },
      },
    ],
    unique: [
      {
        interior: {
          title: "Expert Technicians",
          icon: <PeopleIcon style={{ fontSize: "2.5rem" }} />,
          subtitle:
            "Our personell are fully trained and highly skilled to deliver and satisfy clients expectations and beyond.",
        },
      },
      {
        land: {
          title: "Professional Service",
          icon: <EcoIcon style={{ fontSize: "2.5rem" }} />,
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        concept: {
          title: "Great Support",
          icon: <AllInclusiveIcon style={{ fontSize: "2.5rem" }} />,
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        arch: {
          title: "Technical Skills",
          icon: <LayersIcon style={{ fontSize: "2.5rem" }} />,
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        tree: {
          title: "Positive Reviews",
          icon: <CommentIcon style={{ fontSize: "2.5rem" }} />,
          subtitle:
            "Sony laptops are among the most well known laptops on todays market. Sony is a name that over time has established itself as creating a solid product.",
        },
      },
      {
        recommend: {
          title: "Highly Recommended",
          icon: <VerifiedUserIcon style={{ fontSize: "2.5rem" }} />,
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
          <Heading
            title={"Our Services"}
            subtitle={"We Play To Win"}
            color={"white"}
          />
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
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Get to Know A Project Estimate</h1>
                <span>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere earum magni nemo fugiat. Provident accusamus
                    cupiditate repellendus numquam, ipsum culpa quia possimus
                    ratione adipisci expedita, obcaecati quidem sapiente qui
                    dolores.
                  </p>
                </span>
              </div>
              <div className={`col-md-4 ${classes.Services__quote}`}>
                <Button style={{ border: "1px solid darkorange" }}>
                  Get A Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Heading
            title={"What Makes Us Unique"}
            subtitle={"We Make It Happen"}
            color={"white"}
          />
          <ServiceRow services={this.state.unique} />
        </div>
      </section>
    );
  }
}

export default Services;
