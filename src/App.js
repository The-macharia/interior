import React, { Component } from "react";
import Header from "./containers/Header";
import About from "./containers/About";
import Services from "./containers/Services";
import Aux from "./hoc/Aux";

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main>
          <About />
          <Services />
        </main>
      </Aux>
    );
  }
}

export default App;
