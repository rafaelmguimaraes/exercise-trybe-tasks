import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { LoginForm, CustomHeader, CustomMessage } from "../../components";
import * as authAction from "../../store/ducks/auth/actions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const {
      auth: { usersList },
      signIn,
      history
    } = this.props;
    const { email, password } = this.state;

    const userAlreadyExists = usersList.some(
      (user) => user.email === email && user.password === password
    );

    if (userAlreadyExists) {
      const user = { email, password };
      signIn(user);
      history.push("/home");
    }
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <CustomHeader message="TrybeTasks" />
          <LoginForm
            formData={this.state}
            onInputChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
          />
          <CustomMessage>
            New to us? <Link to="/signup">Sign Up</Link>
          </CustomMessage>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  signIn: authAction.signIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
