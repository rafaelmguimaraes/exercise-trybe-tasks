import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavBar } from "../components";
import * as authAction from "../store/ducks/auth/actions";

const PrivateRoute = ({ component: Component, auth, logOut, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isLogged === true ? (
          <>
            <NavBar onLogOut={logOut} {...props} />
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  logOut: authAction.logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
