import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { LayoutComponent } from "./Components/Layout/Layout";

const authenticated = false;

const PrivetRoute = ({ component, ...rest }: any) => {
  const selectedComponent = () => {
    authenticated ? (
      React.createElement(component)
    ) : (
      <Redirect to={{ pathname: "login" }} />
    );
  };
  return <Route {...rest} render={selectedComponent}/>
};

export const Routing = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" exact component={LayoutComponent} />
      </Switch>
    </React.Fragment>
  );
};
