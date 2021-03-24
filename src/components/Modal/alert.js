// import React from "react";
import React, { Component } from "react";
import Background from "./combined/backdrop";
import Modal from "./combined/modal";

// const alert = (props) => {
//   return (
//     <Background showDisplay={props.showDisplay} onOff={props.onOff}>
//       <Modal />
//     </Background>
//   );
// };

class Alert extends Component {
  //   componentWillUnmount() {
  //     if (this.props.showDisplay === false) {
  //       audioTune.pause();
  //     }
  //   }
  state = {};
  render() {
    return (
      <Background showDisplay={this.props.showDisplay} onOff={this.props.onOff}>
        <Modal />
      </Background>
    );
  }
}

export default Alert;

// export default alert;
