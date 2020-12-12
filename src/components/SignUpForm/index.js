import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

const SiginUpForm = ({
  formData: { name, password, email },
  onInputChange,
  onSubmit
}) => (
  <Form size="large">
    <Segment stacked>
      <Form.Input
        value={name}
        name="name"
        fluid
        placeholder="Name"
        onChange={(event) => onInputChange(event)}
      />
      <Form.Input
        value={email}
        name="email"
        fluid
        placeholder="E-mail address"
        onChange={(event) => onInputChange(event)}
      />
      <Form.Input
        value={password}
        name="password"
        fluid
        placeholder="Password"
        type="password"
        onChange={(event) => onInputChange(event)}
      />
      <Button onClick={onSubmit} color="blue" fluid size="large">
        SignUp
      </Button>
    </Segment>
  </Form>
);

SiginUpForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SiginUpForm;
