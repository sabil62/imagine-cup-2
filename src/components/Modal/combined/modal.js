import React from "react";
import "./modal.css";

const modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-box opened">
        <div className="cross" style={{ cursor: "pointer" }}>
          &#10006;
        </div>
        <h1 style={{ textAlign: "center", color: "wheat", opacity: "0.95" }}>
          Fire Alert
        </h1>
        <h3 style={{ color: "wheat", opacity: "0.8" }}>
          Device id 038 at 27.6253° N, 85.5561° E
        </h3>
      </div>
    </div>
  );
};

export default modal;
