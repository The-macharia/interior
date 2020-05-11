import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../UI/Logo";

const Nav = (props) => {
  const styles = {
    backgroundColor: "transparent !important",
  };
  const linkStyles = {
    textTransform: "capitalize",
    color: "white",
    fontSize: "1.8rem",
    padding: "1rem 1.5rem",
  };
  return (
    <nav className="navbar navbar-expand-lg" style={styles}>
      <a className="navbar-brand mr-auto" href="/">
        <Logo />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <MenuIcon style={{ color: "white" }} />
        </span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarText"
      >
        <ul className="navbar-nav">
          {props.links.map((link) => (
            <li className="nav-item active" key={link}>
              <a className="nav-link" href={`#${link}`} style={linkStyles}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
