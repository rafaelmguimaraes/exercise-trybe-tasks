import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";

const CustomMessage = ({ children }) => <Message>{children}</Message>;

CustomMessage.propTypes = {
  children: PropTypes.node.isRequired
};
export default CustomMessage;
