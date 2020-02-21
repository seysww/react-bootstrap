import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  UsersRoutes,
  ProductRoutes,
  AuthLogin
} from "../features";

import {
  PrivateRoute
} from "./private-routing";

function MainRoutes(props) {
  return (
    <Switch>
      <Route path="/login" component={AuthLogin}/>
      <PrivateRoute path="/products">
        <ProductRoutes />
      </PrivateRoute>
      <PrivateRoute path="/users">
        <UsersRoutes />
      </PrivateRoute>
      <Redirect
        to={{
          pathname: "/login"
        }}
      />
    </Switch>
  )
}

export { MainRoutes };