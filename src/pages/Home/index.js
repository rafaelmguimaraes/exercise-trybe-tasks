import React, { Component } from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { TaskGroup } from "../../components";

class Home extends Component {
  render() {
    const {
      tasks,
      auth: {
        currentUser: { name }
      }
    } = this.props;

    return (
      <Container fluid textAlign="justified" style={{ width: 1000 }}>
        <Header style={{ marginTop: 40 }} textAlign="center" as="h2">
          <Icon name="tasks" />
          <Header.Content>{`${name}'s Tasks`}</Header.Content>
        </Header>
        <TaskGroup tasks={tasks} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
