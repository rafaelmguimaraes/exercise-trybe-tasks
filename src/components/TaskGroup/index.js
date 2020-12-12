import React from "react";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";
import TaskCard from "../TaskCard";

const TaskGroup = ({ tasks }) => (
  <Card.Group>
    {tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
    ))}
  </Card.Group>
);

TaskGroup.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TaskGroup;
