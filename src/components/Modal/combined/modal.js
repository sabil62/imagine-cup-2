import React from "react";
import "./modal.css";

const modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-box opened">
        <h1 style={{ textAlign: "center", color: "wheat", opacity: "0.95" }}>
          Heatwave Warning
        </h1>
        <h3 style={{ color: "wheat", opacity: "0.8" }}>
          Please stay inside your house or a safe zone
        </h3>
      </div>
    </div>
  );
};

export default modal;
