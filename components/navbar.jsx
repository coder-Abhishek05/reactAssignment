
// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../public/styles.css";
// function Navbar() {
//   const navStyle = {
//     display: "flex",
//     listStyle: "none",
//     gap: "20px",
//     height: "10vh",
//     backgroundColor: "black",
//     alignItems: "center",
//     paddingLeft: "1rem",
//     fontFamily: "Arial, Helvetica, sans-serif",
//     zIndex: "100",
//   };

//   return (
//     <div className="navbar" style={navStyle}>
//       <img src={"https://t3.ftcdn.net/jpg/03/06/23/08/360_F_306230810_ROw7MaiXo82VjdlkKVrgs1M9wMG6T1ok.jpg"} alt="Logo" style={{height: '50px', marginRight: '1rem'}}/>
//       <li>
//         <NavLink
//           style={({ isActive, isPending }) => {
//             return {
//               color: isActive ? "red" : "white",
//               textDecoration: isActive ? "none" : "none",
//               position: isActive ? "relative" : "relative",
//               zIndex: "100",
//             };
//           }}
//           to="/"
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           style={({ isActive, isPending }) => {
//             return {
//               color: isActive ? "red" : "white",
//               textDecoration: isActive ? "none" : "none",
//               position: isActive ? "relative" : "relative",
//               zIndex: "100",
//             };
//           }}
//           to="/about"
//         >
//           About
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           style={({ isActive, isPending }) => {
//             return {
//               color: isActive ? "red" : "white",
//               textDecoration: isActive ? "none" : "none",
//               position: isActive ? "relative" : "relative",
//               zIndex: "100",
//             };
//           }}
//           to="/contact"
//         >
//           Contact
//         </NavLink>
//       </li>
//     </div>
//   );
// }

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "../public/styles.css";
// Import your logo image
//import logo from 'data:image/png;base64,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';

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
    height: "10vh",
    backgroundColor: "black",
    alignItems: "center",
    paddingLeft: "1rem",
    fontFamily: "Arial, Helvetica, sans-serif",
    zIndex: "100",
    fontWeight: '700'
  };

  const linkStyle = {
    display: "flex",
    gap: "20px",
  };

  return (
    <div className="navbar" style={navStyle}>
      <img src={"data:image/png;base64,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"} alt="Logo" style={{height: '50px'}}/>
      <div style={linkStyle}>
        <li>
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "red" : "white",
                textDecoration: isActive ? "none" : "none",
                position: isActive ? "relative" : "relative",
                zIndex: "100",
              };
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "red" : "white",
                textDecoration: isActive ? "none" : "none",
                position: isActive ? "relative" : "relative",
                zIndex: "100",
              };
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "red" : "white",
                textDecoration: isActive ? "none" : "none",
                position: isActive ? "relative" : "relative",
                zIndex: "100",
              };
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </div>
    </div>
  );
}

export default Navbar;

