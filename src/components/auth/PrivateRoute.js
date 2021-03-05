import React, {Component} from 'react'
import {Route, Redirect} from "react-router-dom";
import {isAuthentification} from "./helps"

function PrivateRoute({component: Component, ...rest}) {
  <Route
    {...rest}
    render={props => 
        isAuthentification() ? (
        <Component {...props} />
    ) : (
        <Redirect
           to={{
               pathname:"/login"
           }}
        />
    )}
  
  />
}

export default PrivateRoute
