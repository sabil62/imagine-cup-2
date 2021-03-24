import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "antd/dist/antd.css";
//just demo
import Alert from "./alert";
// import Background from "../Modal/combined/backdrop";
import "./sidenav.css";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;

//redux

class Sidenav extends React.Component {
  render() {
    return (
      <Sider
        collapsible
        collapsed={true}
        trigger={null}
        collapsedWidth={70}
        theme={"light"}
        className="sider"
      >
        <Alert />
        {/* <span> lion{this.props.change}</span>
        <h4>{this.props.another}</h4> */}
        {this.props.change === 5 ? (
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            theme="light"
            style={{
              width: "70px",
            }}
          >
            <Menu.Item key="0">
              <Icon type="global" />
              <Link to="/">
                <span>Map</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="home" theme="filled" />
              <Link to="/home">
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="database" theme="filled" />
              <Link to="/data">
                <span>Data</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="fund" theme="filled" />
              <Link to="/graph">
                <span>Graph</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="pie-chart" theme="filled" />
              <Link to="/history">
                <span>History</span>
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="5">
                        <Icon type="compass" theme="filled" />
                        <Link to="/live">
                        <span>Live</span>
                        </Link>
                    </Menu.Item> */}
            <Menu.Item key="6">
              <Icon type="question-circle" theme="filled" />
              <Link to="/about">
                <span>About</span>
              </Link>
            </Menu.Item>

            <div className="hawa"></div>
            <Menu.Item key="7" className="settings">
              <Icon type="setting" theme="filled" />
              <Link to="/settings">
                <span>Settings</span>
              </Link>
            </Menu.Item>
          </Menu>
        ) : null}
      </Sider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    change: state.change,
    another: state.another,
  };
};

export default connect(mapStateToProps)(Sidenav);

{
  /* <Menu
defaultSelectedKeys={['1']}
mode="inline"
theme="light"
style={{
    width:"70px"
}}
>
 <Menu.Item key="0">
    <Icon type="global"  />
    <Link to="/">
    <span>Map</span>
    </Link>
</Menu.Item>
<Menu.Item key="1">
    <Icon type="home" theme="filled" />
    <Link to="/home">
    <span>Home</span>
    </Link>
</Menu.Item>
<Menu.Item key="2">
    <Icon type="database" theme="filled" />
    <Link to="/data">
    <span>Data</span>
    </Link>
</Menu.Item>
<Menu.Item key="3">
    <Icon type="fund" theme="filled" />
    <Link to="/graph">
    <span>Graph</span>
    </Link>
</Menu.Item>
<Menu.Item key="4">
    <Icon type="pie-chart" theme="filled" />
    <Link to="/history">
    <span>History</span>
    </Link>
</Menu.Item>
{/* <Menu.Item key="5">
    <Icon type="compass" theme="filled" />
    <Link to="/live">
    <span>Live</span>
    </Link>
</Menu.Item> */
}
{
  /* <Menu.Item key="6">
    <Icon type="question-circle" theme="filled" />
    <Link to="/about">
    <span>About</span>
    </Link>
</Menu.Item>

<div className="hawa"></div>
<Menu.Item key="7" className ="settings">
    <Icon type="setting" theme="filled" />
    <Link to="/settings">
    <span>Settings</span>
    </Link>
</Menu.Item>
</Menu> */
}
