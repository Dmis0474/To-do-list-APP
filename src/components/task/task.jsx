import React from "react";
import Form from "../form/form";

const Task = (props) => {
  return (
    <div id={props.task.id}>
      <p>{props.task.text}</p>
      <Form
      updateTask={true}
      task={props.task}
      key={props.task.id}
      editMode={props.editMode}
      editTasks={props.editTasks}
      inputListener={props.inputListener}
      edtiableTaskId={props.edtiableTaskId}
      editSubmit={props.editSubmit}
      taskDone={props.taskDone}
      handleDelete={props.handleDelete}
      />
    </div>
  );
};

export default Task;
