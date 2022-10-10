import React from "react";
import Form from "../form/form";

const Task = (props) => {
  return (
    <div>
      <li id={props.task.id} >
        {props.task.id === props.edtiableTaskId && props.editMode ? (
          <div>
          <Form
          onChange={props.inputListener}
          defaultValue={props.task.text}
          key={props.task.id}
          id={props.task.id}
          title={props.task.text}
          onSubmit={props.submitChanges}
        />
        
        <button onClick={props.submitChanges}>Запомнить</button>
        </div>
        ) : (
          <div id={props.task.id}>
          <p >{props.task.text}</p>
          <button onClick={props.editTasks}>Редактировать</button>
          <button onClick={props.taskDone}>Задача выполнена!</button>
          <button onClick={props.handleDelete}>Удалить</button>
          </div>
        )}
      </li>
    </div>
  );
};

export default Task;
