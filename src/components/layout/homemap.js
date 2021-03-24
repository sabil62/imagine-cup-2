import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

class HomeMap extends Component {
  state = {};

  render() {
    return (
      <div>
        {/* <h3>
          sabilian___{this.props.another} and__ {this.props.change}
        </h3>
        <button onClick={() => this.props.onChange()}>click</button> */}

        <MapContainer
          className="mapFull"
          style={{ height: "calc( 100vh - 100px)" }}
          center={[27.6195, 85.5386]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            position={[27.6195, 85.5386]}
            eventHandlers={{
              click: (e) => {
                // console.log("marker clicked", e);
                // alert("lion");
                this.props.history.push("/home");
                //dispatch change
                this.props.onChange();
              },
            }}
          >
            {/* <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> */}
            <Tooltip>Kathmandu University</Tooltip>
          </Marker>
        </MapContainer>
      </div>
    );
  }
  gotoPage = () => {
    alert("lion");
    // window.open(`/insert/your/path/here/${variableName}`);
    this.props.history("/graph");
  };
}

const mapStateToProps = (state) => {
  return {
    another: state.another,
    change: state.change,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: () => {
      dispatch({ type: "CHANGE", thisVeryValueName: 5 });
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeMap)
);
