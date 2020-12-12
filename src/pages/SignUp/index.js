import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { SignUpForm, CustomHeader, CustomMessage } from "../../components";
import * as authAction from "../../store/ducks/auth/actions";

class SignUp extends Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { signUp, history } = this.props;
    const user = this.state;
    signUp(user);
    history.push("/");
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
          <SignUpForm
            formData={this.state}
            onInputChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
          />
          <CustomMessage>
            Already have an ancount? <Link to="/">Sign In</Link>
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
  signUp: authAction.signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
