import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import TripsDetailsPage from "../TripsDetailsPage";
import ApplicationForm from "../ApplicationForm";
import HomePage from "../HomePage";
import CreateTripPage from "../CreateTripPage";
import ListTripsPage from "../ListTripsPage";




export const routes = {
  homepage: "/",
  applicationform: "/applicationform",
  login: "/login",
  tripscreate: "/tripscreate",
  tripslist: "/tripslist",
  tripsdetails: "/tripsdetails"
  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.homepage} component={HomePage} />
        <Route exact path={routes.applicationform} component={ApplicationForm} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.tripscreate} component={CreateTripPage} />
        <Route exact path={routes.tripslist} component={ListTripsPage} />
        <Route exact path={routes.tripsdetails} component={TripsDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
