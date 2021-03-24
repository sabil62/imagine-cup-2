import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import Myheader from "./components/layout/myheader";
import Sidenav from "./components/layout/sidenav";
import MainContent from "./components/layout/maincontent";
import { Layout } from "antd";
import select_reducer from "./store/reducer/select";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  select_reducer,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
