import React from "react";
import Heading from "../components/UI/Heading";
import Link from "../components/Navigation/Link";
import { Paper } from "@material-ui/core";
import Logo from "../components/UI/Logo";

const Footer = (props) => {
  return (
    <div className="container-fluid m-0-auto">
      <div className="container">
        <div className="row align-items-center m-0">
          <div className="col-md-4 mb-sm-3">
            <Logo />
          </div>
          <div className="col-md-4 mb-sm-3">
            <Heading title={"Site Map"} />
            <Link links={props.links} flex={"row"} color={"#04091E"} />
          </div>
          <div className="col-md-4 mt-sm-3">
            <Heading title={"Let's Get Social"} />
            <span className="d-flex justify-content-center w-100">
              {props.social.map((design) =>
                Object.entries(design).map((des) => (
                  <a
                    key={design}
                    href={des[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Paper style={{ margin: "2rem", padding: "1rem" }}>
                      {des[1].icon}
                    </Paper>
                  </a>
                ))
              )}
            </span>
          </div>
        </div>
        <div className="row text-center m-0">
          <hr style={{ backgroundColor: "#C6AD63", width: "80%" }} />
          <p
            className="w-100"
            style={{ fontSize: "2rem", letterSpacing: ".1rem" }}
          >
            Copyright Jowagi Agency &copy;2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
