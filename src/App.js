import React, { Component } from "react";
import Header from "./containers/Header";
import About from "./containers/About";
import Services from "./containers/Services";
import Aux from "./hoc/Aux";
import Contact from "./containers/Contact";

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main>
          <About />
          <Services />
          <Contact/>
        </main>
      </Aux>
    );
  }
}

export default App;
