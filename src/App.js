import React, { Component } from "react";
import Header from "./containers/Header";
import About from "./containers/About";
import Services from "./containers/Services";
import Aux from "./hoc/Aux";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
// import ScrollTop from "./components/UI/ScrollTop";

class App extends Component {
  state = {
    links: ["home", "about", "services", "contact"],
    social: [
      {
        facebook: {
          icon: <FacebookIcon style={{ fontSize: "3rem" }} />,
          href: "https://www.facebook.com",
        },
      },
      {
        twitter: {
          icon: <TwitterIcon style={{ fontSize: "3rem" }} />,
          href: "https://www.twitter.com",
        },
      },
      {
        instagram: {
          icon: <InstagramIcon style={{ fontSize: "3rem" }} />,
          href: "https://www.instagram.com",
        },
      },
    ],
  };

  handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#home"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  render() {
    return (
      <Aux>
        <Header links={this.state.links} />
        <main>
          <About />
          <Services />
          <Contact />
        </main>
        <Footer links={this.state.links} social={this.state.social} />
        {/* <ScrollTop {...this.props} /> */}
      </Aux>
    );
  }
}

export default App;
