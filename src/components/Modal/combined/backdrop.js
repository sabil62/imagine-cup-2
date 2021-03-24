import React from "react";

const background = (props) => {
  let styles = {
    height: "100vh",
  };
  return (
    <div onClick={props.onOff}>
      {props.showDisplay === true ? (
        <div
          style={{
            position: "fixed",
            left: "0",
            top: "0",
            height: "100vh",
            width: "100%",
            backgroundColor: "rgba(21,21,21,0.4)",

            zIndex: "2000",
          }}
        >
          {props.children}
        </div>
      ) : null}
    </div>
  );
};

export default background;
