/* global google*/
/* eslint no-unused-vars: 2*/

import React, { Component } from "react";
import { database } from "./firebase";
import { loadJS } from "./googlemapAPI";

class MapGoogle extends Component {
  constructor(props) {
    super(props);
    this.dataRef = "";
  }
  state = { data: [], newData: "" };
  componentDidMount() {
    loadJS(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDk_5DkCJirjfVv9KH-Fuu_Dek6PL7_mW8&callback=initMap"
    );
    const temp = [];
    this.dataRef = database.ref("map/user1");
    this.dataRef.once("value", snapshot => {
      snapshot.forEach(element => {
        const childData = element.val();
        temp.push(childData);
      });
      this.initMap(temp);
    });
  }
  setMarkers = (map, places) => {
    if (places != null) {
      places.forEach((acc, index) => {
        this.marker = new google.maps.Marker({
          position: acc,
          map,
          label: Number(index + 1).toString()
        });
      });
    }
  };
  initMap = acc => {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: acc[0]
    });
    this.setMarkers(map, acc);
  };
  render() {
    const mapStyle = {
      width: 640,
      height: 480,
      border: "1px solid grey"
    };

    // window.initMap = this.initMap;
    return (
      <div className="googleMap">
        {this.state.data}
        <div id="map" style={mapStyle}>I should be a map!</div>
      </div>
    );
  }
}

export default MapGoogle;
