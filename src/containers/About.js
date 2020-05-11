import React, { Component } from "react";
import Heading from "../components/UI/Heading";
// import Grid from "@material-ui/core/Grid";
import ColGrid from "../components/UI/ColGrid";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

class About extends Component {
  state = {
    mantras: [
      { vision: "to be internationally recognized as world leader" },
      { mission: "to be internationally recognized as world leader" },
      { values: "to be internationally recognized as world leader" },
    ],
    stats: [
        {icon: `${EmojiEmotionsIcon}`,
         }
    ]
  };
  render() {
    return (
      <section id="about">
        <div className="container">
          <Heading title={"About Us"} subtitle={"We Make It Happen"} />

          <ColGrid mantras={this.state.mantras} />
        </div>
      </section>
    );
  }
}

export default About;
