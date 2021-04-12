/**
    return (
        <div>
            <div class="message-title"></div>
            <div class="message-content"></div>
        </div>     
    );

    React.Fragment
    
    1:
    return (
        <>
         <div class="message-title"></div>
         <div class="message-content"></div>
        </>
    )


    2:
    return (
        <React.Fragment>
         <div class="message-title"></div>
         <div class="message-content"></div>
        </React.Fragment>
    )

 */

import React from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import { LayoutComponent } from "./Components/Layout/Layout";
import { Login } from "./Components/Auth/Login/Login";

const authenticated = true;
const PrivateRoute = ({component, ...rest} : any) => {
    const selectedComponent = () => {
        return authenticated ? React.createElement(component) : <Redirect to={{pathname:"/login"}}/>;
    };
    return <Route {...rest} render={selectedComponent}/>
};

export const Routing = () => {
    return (
        <>
            <Switch>
                <PrivateRoute path="/home" exact component={LayoutComponent}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        </>
    );
}
