import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../UI/Logo";
import Link from "../Navigation/Link";
import { Button } from "@material-ui/core";

const Nav = (props) => {
  const styles = {
    backgroundColor: "transparent !important",
  };

  return (
    <nav className="navbar navbar-expand-sm fixed-top" style={styles}>
      <a className="navbar-brand mr-auto" href="/">
        <Logo />
      </a>
      <Button
        style={{color: 'white', width: '3rem' }}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <MenuIcon style={{ color: 'white',fontSize: '3rem' }} />
        </span>
      </Button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarText"
      >
        <Link links={props.links} color={"white"} />
      </div>
    </nav>
  );
};

export default Nav;
