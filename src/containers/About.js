import React, { Component } from "react";
import Heading from "../components/UI/Heading";
import ColGrid from "../components/UI/ColGrid";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import StarsIcon from "@material-ui/icons/Stars";
import TimelineIcon from "@material-ui/icons/Timeline";

class About extends Component {
  state = {
    mantras: [
      { vision: "to be internationally recognized as world leader" },
      {
        mission:
          "To make a difference by providing quality design for your space",
      },
      { values: "Integrity | Efficiency | Commitment | Dependability" },
    ],
    stats: [
      {
        interior: {
          title: "500",
          icon: <StarsIcon style={{ fontSize: "6rem" }} />,
          subtitle: "Projects Completed.",
        },
      },
      {
        land: {
          title: "500",
          icon: <EmojiEmotionsIcon style={{ fontSize: "6rem" }} />,
          subtitle: "Happy Customers.",
        },
      },
      {
        concept: {
          title: "12",
          icon: <TimelineIcon style={{ fontSize: "6rem" }} />,
          subtitle: "Years Of Experience",
        },
      },
    ],
  };
  render() {
    return (
      <section id="about">
        <div className="container">
          <Heading
            title={"About Us"}
            subtitle={"We Are Bold and yet Humble"}
            color={"#222"}
          />
          <ColGrid mantras={this.state.mantras} stats={this.state.stats} />
        </div>
      </section>
    );
  }
}

export default About;
