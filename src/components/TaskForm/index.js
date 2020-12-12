import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

const TaskForm = ({
  formData: { title, subtitle, description },
  onInputChange,
  onSubmit
}) => (
  <Form size="large">
    <Segment stacked>
      <Form.Input
        value={title}
        name="title"
        fluid
        placeholder="title"
        onChange={(event) => onInputChange(event)}
      />
      <Form.Input
        value={subtitle}
        name="subtitle"
        fluid
        placeholder="Subtitle"
        onChange={(event) => onInputChange(event)}
      />
      <Form.TextArea
        value={description}
        name="description"
        placeholder="Description"
        onChange={(event) => onInputChange(event)}
      />
      <Button onClick={onSubmit} color="blue" fluid size="large">
        Add Task
      </Button>
    </Segment>
  </Form>
);

TaskForm.propTypes = {
  formData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default TaskForm;
