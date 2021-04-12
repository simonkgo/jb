import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { LayoutComponent } from "./Components/Layout/Layout";
import { Login } from "./Components/container/Auth/Login/Login";
import { Register } from "./Components/container/Auth/Register/Register";
const authenticated = false;

const PrivetRoute = ({ component, ...rest }: any) => {
  const selectedComponent = () => {
    return authenticated ? (
      React.createElement(component)
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  };
  return <Route {...rest} render={selectedComponent} />;
};

export const Routing = () => {
  return (
    <React.Fragment>
      <Switch>
        <PrivetRoute path="/home" exact component={LayoutComponent} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </React.Fragment>
  );
};
