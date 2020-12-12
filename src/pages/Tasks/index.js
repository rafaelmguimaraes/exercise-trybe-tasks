import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Container, Header, Icon } from "semantic-ui-react";
import { TaskForm, TaskCard } from "../../components";
import * as tasksAction from "../../store/ducks/tasks/actions";

class Tasks extends Component {
  state = {
    title: "",
    subtitle: "",
    description: ""
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { addTask, history } = this.props;
    const task = { id: uuidv4(), ...this.state };
    addTask(task);
    history.push("/home");
  };

  render() {
    return (
      <Container fluid textAlign="justified" style={{ width: 1000 }}>
        <Header style={{ marginTop: 40 }} textAlign="center" as="h2">
          <Icon name="tasks" />
          <Header.Content>Adicionar Task</Header.Content>
        </Header>
        <TaskCard task={this.state} fluid />
        <TaskForm
          formData={this.state}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = {
  addTask: tasksAction.addTask
};

export default connect(null, mapDispatchToProps)(Tasks);
