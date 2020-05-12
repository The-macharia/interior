import React from "react";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
const Form = (props) => {
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
      <TextField
        label="Name"
        name="name"
        type="text"
        required
        onChange={props.changed}
        style={{
          color: "white",
          width: "100%",
          backgroundColor: "transparent",
          margin: "2rem 0",
          borderRadius: ".5rem",
        }}
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        required
        onChange={props.changed}
        style={{
          color: "white",
          width: "100%",
          backgroundColor: "transparent",
          margin: "2rem 0",
          borderRadius: ".5rem",
        }}
      />
      <TextField
        label="Subject"
        type="text"
        name="subject"
        onChange={props.changed}
        style={{
          color: "white",
          width: "100%",
          backgroundColor: "transparent",
          margin: "2rem 0",
          borderRadius: ".5rem",
        }}
      />
      <TextareaAutosize
        aria-label="message textarea"
        rowsMin={3}
        type="textarea"
        name="message"
        required
        placeholder="Your Message"
        onChange={props.changed}
        style={{
          color: "#04091e",
          width: "100%",
          backgroundColor: "transparent",
          margin: "2rem 0",
          padding: "1rem",
          borderRadius: ".5rem",
        }}
      />
      <div className="text-center">
        <Button
          variant="contained"
          size="large"
          type="submit"
          color="primary"
          endIcon={<SendIcon sytle={{ fontSize: "1.4rem" }} />}
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default Form;
