import React, { Component } from "react";
import TextField from "material-ui/TextField";
import { database } from "./firebase";
import MapGoogle from "./MapGoogle";

class LatLong extends Component {
  constructor(props) {
    super(props);
    this.dataRef = "";
  }
  state = { data: [], lat: "", lng: "", state: true, btnToggle: false };
  componentDidMount() {
    this.dataRef = database.ref("/map/user1");
    this.dataRef.on("value", snapshot => {
      console.log(snapshot.val());
      // this.setState({
      //   data: snapshot.val()
      // });
    });
  }
  handleLatChange = event => {
    this.setState({
      lat: event.target.value
    });
  };
  handleLngChange = event => {
    this.setState({
      lng: event.target.value
    });
  };
  handleSaveOnClick = event => {
    event.preventDefault();
    const obj = {
      lat: Number(this.state.lat),
      lng: Number(this.state.lng)
      // state: true
    };
    this.dataRef = database.ref("map/user1/");
    this.dataRef.push(obj, error => {
      if (error) {
        console.log(`Data could not be saved. + ${error}`);
      } else {
        console.log(`Data saved successfully.`);
      }
    });
    this.setState({
      lat: "",
      lng: ""
    });
    window.location.reload();
  };
  // handleBlinkClick = event => {
  //   event.preventDefault();

  //   this.setState(prevState => ({
  //     btnToggle: !prevState.btnToggle
  //   }));

  //   const obj = {
  //     state: this.state.btnToggle
  //   };
  //   this.dataRef.set(obj);
  // };
  render() {
    return (
      <div className="latlong">
        {this.state.data}
        <div className="row">
          <div className="col-xs-4">
            <label htmlFor="latitute" className="lbl-txt-left">
              Latitute
            </label>
          </div>
          <div className="col-xs-4">
            <TextField
              hintText="Lat"
              type="text"
              value={this.state.lat}
              onChange={this.handleLatChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <label htmlFor="longtitute" className="lbl-txt-left">
              Longtitute
            </label>
          </div>
          <div className="col-xs-4">
            <TextField
              hintText="Lag"
              type="text"
              value={this.state.lng}
              onChange={this.handleLngChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <input
              type="button"
              value="Save"
              className="btn btn-primary"
              style={{ float: "right" }}
              onClick={this.handleSaveOnClick}
            />
          </div>
        </div>
        <div className="row">
          <MapGoogle />
        </div>
        {/* <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.lat}
            onChange={this.handleLatChange}
          />
          <input
            type="text"
            value={this.state.lng}
            onChange={this.handleLngChange}
          />
          <input type="submit" />
        </form> */}
        {/* <button onClick={this.handleBlinkClick}>
          {this.state.btnToggle ? "ON" : "OFF"}
        </button> */}
      </div>
    );
  }
}

export default LatLong;
