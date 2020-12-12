import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";

const CustomHeader = ({ message }) => (
  <Header as="h2" color="blue" textAlign="center">
    {message}
  </Header>
);

CustomHeader.propTypes = {
  message: PropTypes.string.isRequired
};

export default CustomHeader;
