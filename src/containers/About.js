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
      { mission: "to be internationally recognized as world leader" },
      { values: "to be internationally recognized as world leader" },
    ],
    stats: [
      {
        interior: {
          title: "100+",
          icon: <StarsIcon style={{ fontSize: "6rem" }} />,
          subtitle: "Projects Completed.",
        },
      },
      {
        land: {
          title: "90+",
          icon: <EmojiEmotionsIcon style={{ fontSize: "6rem" }} />,
          subtitle: "Happy Customers.",
        },
      },
      {
        concept: {
          title: "10+",
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
          <Heading title={"About Us"} subtitle={"We Make It Happen"} />
          <ColGrid mantras={this.state.mantras} stats={this.state.stats} />
        </div>
      </section>
    );
  }
}

export default About;
