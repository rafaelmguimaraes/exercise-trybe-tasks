import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, SignUp, Home, Tasks } from "../pages";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute isPrivate path="/home" component={Home} />
      <PrivateRoute isPrivate path="/tasks" component={Tasks} />
      <Route render={() => <h1>NOT FOUND</h1>} />
    </Switch>
  );
}
