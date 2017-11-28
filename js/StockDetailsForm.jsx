import React, { Component } from "react";
import DatePicker from "material-ui/DatePicker";
import TextField from "material-ui/TextField";
import styled from "styled-components";
import moment from "moment";
import { database } from "./firebase";

import PersonRow from "./PersonRow";
import PersonCol from "./PersonCol";
// import { FormattedNumber } from "react-intl";
const dateFormat = value => moment(value).format("DD/MM/YYYY");

const Legend = styled.legend`
  text-align: left;
`;
class StockDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.dataRef = "";
    this.dataCriteria = [];
    this.dataRow = [];
  }
  state = {
    criteriaHeader: [],
    criteriaRow: [],
    stockName: "",
    stockPrice: "",
    buyPrice: "",
    stockAmount: "",
    startDate: ""
  };
  componentDidMount() {
    this.dataRef = database.ref("stock/user1/");
  }
  setDataHeaderArr = dataCriteria => {
    const data = dataCriteria.map(element => <PersonRow element={element} />);
    return data;
  };
  setDataArr = dataCriteria => {
    const data = dataCriteria.map(element => <PersonRow element={element} />);
    return data;
  };
  handleSubmit = event => {
    event.preventDefault();
    const obj = {
      stockName: this.state.stockName,
      stockPrice: this.state.stockPrice,
      buyPrice: this.state.buyPrice,
      stockAmount: this.state.stockAmount,
      dateSelected: dateFormat(this.state.startDate)
    };

    this.dataRef = database.ref("stock/user1/");
    this.dataRef.push(obj, error => {
      if (error) {
        console.log(`Data could not be saved. + ${error}`);
      } else {
        console.log("Data saved successfully.");
      }
      window.location.reload();
    });
  };
  handleStockNameChange = event => {
    this.setState({
      stockName: event.target.value
    });
  };
  handleStockPriceChange = event => {
    this.setState({
      stockPrice: event.target.value
    });
  };
  handlebuyPriceChange = event => {
    this.setState({
      buyPrice: event.target.value
    });
  };
  handleStockAmountChange = event => {
    this.setState({
      stockAmount: event.target.value
    });
  };
  handleDateChange = (event, date) => {
    this.setState({
      startDate: date
    });
  };
  handleSearchOnClick = event => {
    event.preventDefault();
    this.dataCriteria = [];
    this.dataRef = database
      .ref("/stock/user1")
      .orderByChild("stockName")
      .equalTo("Mint")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(element => {
          const childData = element.val();
          this.dataCriteria.push(childData);
        });
        this.dataRow = this.setDataArr(this.dataCriteria);
        this.setState({ criteriaRow: this.dataRow });
      });
  };
  render() {
    return (
      <div className="stockDetailsForm">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <Legend>Stock Details</Legend>
            <div className="row">
              <div className="col-xs-4">
                <label htmlFor="stockname" className="lbl-txt-left">
                  Stock Name
                </label>
              </div>
              <div className="col-xs-4">
                <TextField
                  hintText="Stock Name"
                  type="text"
                  value={this.state.stockName}
                  onChange={this.handleStockNameChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <label htmlFor="stockPrice" className="lbl-txt-left">
                  Stock Price
                </label>
              </div>
              <div className="col-xs-4">
                <TextField
                  hintText="Stock Price"
                  type="text"
                  value={this.state.stockPrice}
                  onChange={this.handleStockPriceChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <label htmlFor="buyPrice" className="lbl-txt-left">
                  Buy Price
                </label>
              </div>
              <div className="col-xs-4">
                <TextField
                  hintText="Buy Price"
                  type="text"
                  value={this.state.buyPrice}
                  onChange={this.handlebuyPriceChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <label htmlFor="stockAmount" className="lbl-txt-left">
                  Stock Amount
                </label>
              </div>
              <div className="col-xs-4">
                <TextField
                  hintText="Stock Amount"
                  type="text"
                  value={this.state.stockAmount}
                  onChange={this.handleStockAmountChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <label htmlFor="dateBuy" className="lbl-txt-left">
                  Buy Date
                </label>
              </div>
              <div className="col-xs-4">
                <DatePicker
                  formatDate={date => moment(date).format("DD/MM/YYYY")}
                  hintText="วัน/เดือน/ปี"
                  value={this.state.startDate}
                  onChange={this.handleDateChange}
                  style={{ color: "white", align: "right" }}
                />
              </div>
            </div>
          </fieldset>
          <div className="row">
            <div className="col-xs-12">
              <input
                type="button"
                value="Save"
                className="btn btn-primary"
                style={{ float: "right" }}
              />
            </div>
          </div>
        </form>
        <fieldset>
          <legend>Search</legend>
          <div className="row">
            <table
              className="table table-hover table-bordered table-striped"
              style={{ width: "100%" }}
            >
              <thead><PersonCol /></thead>
              <tbody>{this.state.criteriaRow}</tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <input
                type="button"
                value="Search"
                className="btn btn-primary"
                style={{ float: "right" }}
                onClick={this.handleSearchOnClick}
              />
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default StockDetailsForm;
