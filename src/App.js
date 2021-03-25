import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import Myheader from "./components/layout/myheader";
import Sidenav from "./components/layout/sidenav";
import MainContent from "./components/layout/maincontent";
import { Layout } from "antd";
import select_reducer from "./store/reducer/select";
// import Background from "./components/Modal/combined/backdrop";
// import Modal from "./components/Modal/combined/modal";
import Alert from "./components/Modal/alert";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  select_reducer,
  composeEnhancers(applyMiddleware(thunk))
);

const audioTune = new Audio("https://awan.com.np/sounds.mp3");

class App extends React.Component {
  state = {
    delay: true,
  };
  componentDidMount() {
    // audioTune.load();
    // // audioTune.play();
    if (this.props.showDisplay === false) {
      audioTune.pause();
    }
    setTimeout(() => this.onShow(), 4800);
    setTimeout(() => {
      audioTune.load();
    }, 4800);
    setTimeout(() => {
      audioTune.play();
    }, 4800);
  }

  componentDidUpdate() {}
  state = {
    show: true,
  };
  // onAudioLoad() {
  //   audioTune.load();
  // }
  // onAudioPlay() {
  //   audioTune.play();
  // }
  onOff = () => {
    this.setState({ show: false });
  };
  onShow = () => {
    this.setState({ delay: true });
  };
  onSoundOff = () => {
    audioTune.pause();
  };

  render() {
    return (
      <Provider store={store}>
        {this.state.delay ? (
          <div onClick={() => this.onSoundOff()}>
            <Alert showDisplay={this.state.show} onOff={() => this.onOff()} />
          </div>
        ) : null}

        <Router>
          <div>
            <Layout>
              <Myheader />
              <Layout>
                <Sidenav />
                <MainContent />
              </Layout>
            </Layout>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
