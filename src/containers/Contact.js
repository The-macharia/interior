import React, { Component } from "react";
import classes from "./Containers.module.css";
import Heading from "../components/UI/Heading";
import Form from "../components/Form/Form";
import Image from "../assets/img9.jpg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import axios from "axios";

class Contact extends Component {
  state = {
    contact: [
      {
        address: {
          title: "Address",
          icon: <LocationOnIcon style={{ fontSize: "3rem" }} />,
          subtitle: (
            <span>
              Tusker House
              <br />
              Ronald Ngara Street
              <br />
              Nairobi
            </span>
          ),
        },
      },
      {
        email: {
          title: "Email",
          icon: <MailIcon style={{ fontSize: "3rem" }} />,
          subtitle: (
            <a href="mailto:kamaunyawira@outlook.com">
              kamaunyawira@outlook.com
            </a>
          ),
        },
      },
      {
        call: {
          title: "Call",
          icon: <CallIcon style={{ fontSize: "3rem" }} />,
          subtitle: "+254793999862",
        },
      },
    ],
    form: {
      name: {
        value: "",
      },
      email: {
        value: "",
      },
      subject: {
        value: "",
      },
      message: {
        value: "",
      },
    },
    show: false,
    showMessage: "",
  };

  handleChangeHandler = (e, name) => {
    const updatedForm = this.state.form;
    updatedForm[name] = { ...updatedForm[name], value: e.target.value };
    this.setState({ form: updatedForm });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const info = {
      name: this.state.form.name.value,
      email: this.state.form.email.value,
      subject: this.state.form.subject.value,
      message: this.state.form.message.value,
    };
    axios
      .post("https://jowagi-2020-agency.firebaseio.com/messages.json", info)
      .then((response) => {
        this.setState({ show: true });

        setTimeout(() => {
          this.setState({
            show: false,
            showMessage: (
              <div className="success" style={{ background: "#33c533" }}>
                Message Sent Successfully! We will get back to you shortly.
              </div>
            ),
          });
        }, 10000);
      })
      .catch((error) =>
        setTimeout(() => {
          this.setState({
            show: false,
            showMessage: (
              <div className="success" style={{ background: "#33c533" }}>
                There was an error sending your message. Please Try again later!
              </div>
            ),
          });
        }, 5000)
      );
  };

  render() {
    const styles = {
      backgroundImage: `linear-gradient(to right, rgba(0,0,0), rgba(0,0,0, 0.8)), url(${Image})`,
    };
    const spanStyles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    return (
      <section id="contact" className={classes.Contact} style={styles}>
        <div className="container">
          <Heading title={"Talk To Us"} color={"white"} />
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              {this.state.contact.map((design) =>
                Object.entries(design).map((des) => (
                  <div
                    className="col-xs-12 col-md text-center my-3"
                    key={design}
                  >
                    <div
                      className="card d-flex flex-row"
                      style={{
                        padding: "1rem 1.5rem",
                        backgroundColor: "transparent",
                        color: "white",
                      }}
                    >
                      <span style={spanStyles}>{des[1].icon}</span>
                      <div className="w-100">
                        <h5
                          className="card-title text-center w-100"
                          style={{ fontSize: "2rem", color: "#8e701d" }}
                        >
                          {des[1].title}
                        </h5>
                        <p
                          className="card-text text-center w-100"
                          style={{ fontSize: "1.5rem" }}
                        >
                          {des[1].subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="col-md-6">
              <Form
                show={this.state.show}
                showMessage={this.state.showMessage}
                submitHandler={this.submitHandler}
                changed={(e, name) =>
                  this.handleChangeHandler(e, e.target.name)
                }
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
