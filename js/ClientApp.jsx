import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Weather from "./Weather";
import LatLong from "./LatLong";
import MapGoogle from "./MapGoogle";
import StockDetailsForm from "./StockDetailsForm";
import Layout from "./Layout";

const FourOFour = () => <div><h1>404</h1></div>;

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <Layout>
        <div className="app">
          <Switch>
            {/* <Route exact path="/" component={LatLong} /> */}
            <Route path="/weather" component={Weather} />
            <Route path="/mapg" component={MapGoogle} />
            <Route path="/stock" component={StockDetailsForm} />
            <Route path="/latlong" component={LatLong} />
            <Route component={FourOFour} />
          </Switch>
        </div>
      </Layout>
    </MuiThemeProvider>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
