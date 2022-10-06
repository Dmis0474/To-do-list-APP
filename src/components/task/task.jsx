import React from "react";

const Task = (props) => {
  return (
    <div>
      <li id={props.task.id} key={props.task.id}>
        {props.task.id === props.edtiableTaskId && props.editMode ? (
          <div>
            <input
              type="text"
              defaultValue={props.task.text}
              key={props.task.id}
              id={props.task.id}
              title={props.task.text}
              onChange={props.inputListener}
            />
          </div>
        ) : (
          <p>{props.task.text}</p>
        )}
        <button onClick={props.handleDelete}>Удалить</button>
        <button onClick={props.taskDone}>Задача выполнена!</button>

        {props.editMode ? (
          <button onClick={props.submitChanges}>Запомнить</button>
        ) : (
          <button onClick={props.editTasks}>Редактировать задачу</button>
        )}
      </li>
    </div>
  );
};

export default Task;
