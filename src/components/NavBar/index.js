import React, { Component } from "react";
import { Button, Menu, Container } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class NavBar extends Component {
  handleItemClick = (e, { name }) => {
    const { history } = this.props;
    history.push(`/${name}`);
  };

  render() {
    const { onLogOut } = this.props;
    return (
      <Menu color="blue" size="massive">
        <Container text>
          <Menu.Item name="home" onClick={this.handleItemClick}></Menu.Item>
          <Menu.Item name="tasks" onClick={this.handleItemClick} />

          <Menu.Menu position="right">
            <Menu.Item>
              <Button onClick={onLogOut} primary>
                LogOut
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

NavBar.propTypes = {
  onLogOut: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
