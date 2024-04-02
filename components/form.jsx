import React from "react";
import "../public/styles.css";
function Form() {
  const flexContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "80%",
    backgroundColor: "#dfdcd9",
    padding: "1rem",
    boxShadow: "0 0 20px -6px purple",
  };

  const textStyle = {
    padding: "0.5rem",
    border: "none",
    marginTop: "0.4rem",
  };
  const abc={
    color:"black",
  }
  return (
    <header class="head">
      <div style={flexContainer}>
        <h1 style={abc}>Discuss issue</h1>
        <div className="input_fields">
          <div className="name">
            First Name :
            <input type="text" placeholder="e.g., Harry" />
            Last Name :
            <input type="text" placeholder="Reddy" />
          </div>
          <div className="contact">
            Email :
            <input type="email" placeholder="e.g., Apple@example.com" />
            Phone no :
            <input type="tel" placeholder="e.g., 2222222222" />
          </div>
        </div>
        <div className="message">
          Discuss the issue ?
          <textarea
            name=""
            id=""
            cols="70"
            rows="10"
            style={textStyle}
            placeholder="Express your opinions ..."
          ></textarea>
        </div>
        <button>Submit</button>
      </div>
    </header>
  );
}

export default Form;
