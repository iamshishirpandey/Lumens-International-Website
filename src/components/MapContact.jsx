import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContact extends Component {
  render() {
    return (
      <Map
        centerAroundCurrentLocation={true}
        google={this.props.google}
        zoom={14}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
        initialCenter={{
          lat: 27.717245,
          lng: 85.323959,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCNYAkCtpJKJklz78SKMdZg_BvWyz7Q3mM",
})(MapContact);
