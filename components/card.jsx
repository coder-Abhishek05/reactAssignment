// import React from "react";
// import "../public/styles.css";

// function Card(props) {
//   return (
//     <div className="card-container">
//       <img src={props.img} alt="card_image" />
//       <div className="content">
//         <h2>{props.title}</h2>
//         <span>{props.sub}</span>
//         <p>{props.description}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React from "react";
import "../public/styles.css";

function Card(props) {
  return (
    <div className="card-container">
      <img src={props.img} alt="card_image" />
      <div className="content">
        <h2>{props.title}</h2>
        <span>{props.sub}</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;

