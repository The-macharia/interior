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
            "We tailor your available space to fit your personal comfort, from homes to offices and other commercial space. We creatively determine the requirements of the space available and select essential, beautiful and decorative concepts such as paints and lighting. You will fall in love with the transformation!",
        },
      },
      {
        land: {
          title: "Land Scaping",
          subtitle:
            "We create visual attraction in layering, texture contrast, colour and bloom. We improve your outdoor space by planning, designing and modifying the visible features in your environment which entails the flora and fauna to bring joy, beauty, symmetry, balance to nature and a peaceful place to stroll on. We execute hardscapes, walkways,play areas, fences, herb gardens, pools, fountains, landscape lighting, garden lighting and keeping pollinators alive by planting flowers.",
        },
      },
      {
        concept: {
          title: "Concept Design",
          subtitle:
            "To us there is no bad idea, we are determined to take any challenging idea and conceptualize it to a masterpiece. We provide dedicated support in brainstorming, planning and designing until your dream becomes a reality.",
        },
      },
      {
        arch: {
          title: "Architecture Design",
          subtitle:
            "We break down a large project into manageable chunks by giving  individual attention to each aspect, space and detail of the project to refine the scheme into final design.",
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
            "Our great enthusiasm for customer services will ensure that our clients will have an amazing time with us without compromising quality of our services",
        },
      },
      {
        concept: {
          title: "Great Support",
          icon: <AllInclusiveIcon style={{ fontSize: "2.5rem" }} />,
          subtitle:
            "Our customer experience team will always be ready to engage with you to ensure you get the best and fastest service anytime.",
        },
      },
      {
        arch: {
          title: "Technical Skills",
          icon: <LayersIcon style={{ fontSize: "2.5rem" }} />,
          subtitle:
            "Coming up with the ideas is just a part of the process, we have a team of skilled technicians who will work with you untill the project is done. ",
        },
      },
      {
        tree: {
          title: "Positive Reviews",
          icon: <CommentIcon style={{ fontSize: "2.5rem" }} />,
          subtitle:
            "You may not have heard of us but our reputation precedes us, we play hard in our game and our customers have shown continous appreciation of our work. We would love to embark on this journey with you.",
        },
      },
      {
        recommend: {
          title: "Highly Recommended",
          icon: <VerifiedUserIcon style={{ fontSize: "2.5rem" }} />,
          subtitle:
            "We are the leaders in this game, and we wear that cape with pride. Our innovation and creativity speaks all the words for us and our customers know that.",
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
                    It is common for projects to difer in pricing. But don't
                    worry, we are always here to answer any questions you have.
                    Click on this button to request your own estimate.
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
