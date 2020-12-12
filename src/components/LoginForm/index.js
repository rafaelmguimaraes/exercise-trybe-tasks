import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Segment } from "semantic-ui-react";

const LoginForm = ({
  formData: { email, password },
  onInputChange,
  onSubmit
}) => (
  <Form size="large">
    <Segment stacked>
      <Form.Input
        fluid
        icon="lock"
        value={email}
        name="email"
        iconPosition="left"
        placeholder="E-mail address"
        onChange={(event) => onInputChange(event)}
      />
      <Form.Input
        fluid
        icon="lock"
        name="password"
        value={password}
        iconPosition="left"
        placeholder="Password"
        type="password"
        onChange={(event) => onInputChange(event)}
      />

      <Button onClick={onSubmit} color="blue" fluid size="large">
        Login
      </Button>
    </Segment>
  </Form>
);

LoginForm.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
