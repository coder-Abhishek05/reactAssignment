import React from "react";
function Footer() {
  const date = new Date();
  let d = date.getFullYear();
  const foot = {
    borderColor: "red",
    color: "grey",
    fontSize: "small",
    fontFamily: "Arial, Helvetica, sans-serif",
    position: "relative",
    width: "100%",
    textAlign: "center",
    paddingBottom: "1rem",
  };
  return (
    <footer style={foot}>
      <p>Copyright © {d}</p>
    </footer>
  );
}
export default Footer;
