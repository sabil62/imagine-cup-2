import React from "react";

const background = () => {
  let styles = {
    height: "100vh",
  };
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        top: "0",
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(21,21,21,0.4)",

        zIndex: "2000000",
      }}
    ></div>
  );
};

export default background;
