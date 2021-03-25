import React from "react";
import { Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Settings from "../settings/settings";
import About from "../about/about";
import Home from "../home/home";
import History from "../history/historygraph";
import Data from "../data/data";
import Live from "../live/live";
import HomeMap from "./homemap";
import { Layout, message } from "antd";
import Graph from "../graph/graph";
const { Content } = Layout;

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      cityid: 1282950,
    };
    this.changeid = this.changeid.bind(this);
  }

  changeid = (val) => {
    message.success("Location updated...");
    this.setState({ cityid: val });
  };

  render() {
    const contentstyle = {
      padding: "10px",
      minHeight: "100vh",
      paddingTop: "100px",
      margin: "0px",
      backgroundColor: "#F6F6F6",
      marginLeft: 70,
    };
    return (
      <Content style={contentstyle}>
        <Switch>
          <Route path="/" exact component={HomeMap} />
          <Route
            path="/home"
            render={(props) => <Home cityid={this.state.cityid} />}
          />
          <Route path="/data" component={Data} />
          <Route
            path="/graph"
            render={(props) => <Graph cityid={this.state.cityid} />}
          />
          <Route path="/history" component={History} />
          <Route path="/live" component={Live} />
          <Route path="/about" component={About} />
          <Route
            path="/settings"
            render={(props) => (
              <Settings changeid={this.changeid} cityid={this.state.cityid} />
            )}
          />
        </Switch>
      </Content>
    );
  }
}

export default MainContent;
