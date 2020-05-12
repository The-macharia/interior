import React from "react";
import Buttons from "@material-ui/core/Button";

const styles = {
    fontSize: '2.5rem',
    color: 'white',
    border: '1px solid oldlace',
    margin: '2rem',
}

const Button = (props) => (
  <Buttons variant="outlined" onClick={props.clicked}  style={styles}>
    {props.children}
  </Buttons>
);

export default Button;
