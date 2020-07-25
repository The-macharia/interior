import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
const Form = (props) => {
  const styles = {
    color: "white",
    width: "100%",
    backgroundColor: "transparent",
    margin: "2rem 0",
    borderRadius: ".5rem",
    fontSize: "1.7rem",
    transition: "all .3s",
  };
  return (
    <form
      onSubmit={props.submitHandler}
      className="w-100"
      style={{
        backgroundColor: "white",
        padding: "1rem 2rem",
        borderRadius: ".5rem",
      }}
    >
      {props.show && props.showMessage}

      <TextField
        label="Name"
        name="name"
        type="text"
        required
        onChange={props.changed}
        style={styles}
        // size="large"
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        required
        onChange={props.changed}
        style={styles}
        // size="large"
      />
      <TextField
        label="Subject"
        type="text"
        name="subject"
        onChange={props.changed}
        style={styles}
        // size="large"
      />
      <TextField
        aria-label="message textarea"
        // rowsMin={3}
        type="textarea"
        name="message"
        required
        multiline
        placeholder="Your Message"
        onChange={props.changed}
        style={styles}
        // size="large"
      />

      <div className="text-center">
        <Button
          variant="contained"
          // size="large"
          type="submit"
          color="primary"
          endIcon={<SendIcon style={{ fontSize: "1.7rem", color: "white" }} />}
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default Form;
