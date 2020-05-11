import React from "react";
import Grid from "@material-ui/core/Grid";

const styles = {
  textAlign: "center",
  marginBottom: '3rem'
};

const Heading = (props) => {
  return (
    <Grid item xs={12} style={styles}>
      <h1>{props.title}</h1>
      <div className='d-flex'>
        <hr style={{ backgroundColor: "#C6AD63", width: "20%" }} />
        <h3>{props.subtitle}</h3>
        <hr style={{ backgroundColor: "#C6AD63", width: "20%" }} />
      </div>
    </Grid>
  );
};

export default Heading;
