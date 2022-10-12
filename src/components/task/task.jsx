import React from "react";
import Form from "../form/form";

const Task = (props) => {
  return (
    <div id={props.task.id}>
      <p>{props.task.text}</p>
      <Form
        onChange={props.inputListener}
        defaultValue={props.task.text}
        key={props.task.id}
        id={props.task.id}
        title={props.task.text}
        onSubmit={props.submitChanges}
        task={props.task}
        key={props.task.text.toString()}
        editMode={props.editMode}
        edtiableTaskId={props.edtiableTaskId}
        handleDelete={props.handleDelete}
        taskDone={props.taskDone}
        editSubmit={props.editSubmit}
        submitChanges={props.submitChanges}
        editTasks={props.editTasks}
        inputListener={props.inputListener}
      />
    </div>
  );
};

export default Task;
