import React, { lazy } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const AuthComponent = lazy(() => import("../pages/Auth"))
const LayoutComponent = lazy(() => import("../pages/Layout"))
const LoginComponent = lazy(() => import("../pages/Login"))
const DownloadComponent = lazy(() => import("../pages/Download"))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

export default class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/download" component={DownloadComponent} />
          <Route path="/auth" component={AuthComponent} />
          <PrivateRoute component={LayoutComponent} />
        </Switch>
      </Router>
    );
  }
}
