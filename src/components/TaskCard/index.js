import React from "react";
import { connect } from "react-redux";
import { Button, Card, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import * as tasksAction from "../../store/ducks/tasks/actions";

const TaskCard = ({ task: { title, subtitle, description }, ...props }) => (
  <Card {...props}>
    <Card.Content>
      <Image
        floated="right"
        size="mini"
        src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
      />
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{subtitle}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button basic color="green">
          Edit
        </Button>
        <Button basic color="red">
          Delete
        </Button>
      </div>
    </Card.Content>
  </Card>
);

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

const mapDispatchToProps = {
  delete: tasksAction.deleteTask
};

export default connect(mapDispatchToProps)(TaskCard);
