import React from "react";
import styles from "./form.module.css";

const Form = (props) => {
  return (
    <div id={props.task.id}>
      {props.updateTask ? (
        <div id={props.task.id}>
          {!props.editMode ? (
            <div id={props.task.id}>
              <button onClick={props.editTasks}>Редактировать</button>
              <button onClick={props.taskDone}>Задача выполнена </button>
              <button onClick={props.handleDelete}>Удалить</button>
            </div>
          ) : props.edtiableTaskId === props.task.id ? (
            <div id={props.task.id}>
              <input
                type="date"
                onChange={props.editDateListener}
                min={props.dateNow}
              />
              <input
                type="text"
                defaultValue={props.task.text}
                key={props.task.id}
                id={props.task.id}
                title={props.task.text}
                onChange={props.inputListener}
              />
              <button onClick={props.editSubmit}>Сохранить</button>
            </div>
          ) : (
            <div id={props.task.id}>
              <button onClick={props.editTasks}>Редактировать</button>
              <button onClick={props.taskDone}>Задача выполнена</button>
              <button onClick={props.handleDelete}>Удалить</button>
            </div>
          )}
        </div>
      ) : (
        <form
          className={styles.form}
          onSubmit={props.handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") props.handleSubmit(e);
          }}
        >
          <textarea
            name="task"
            value={props.task}
            placeholder="Введите следующее дело..."
            onChange={props.handleChange}
          ></textarea>
          <h4 style={{ margin: 0 }}>Дата завершения</h4>
          <input
            type="date"
            onChange={props.dateListener}
            value={props.deadline}
            min={props.dateNow}
          />
          <button>Добавить дело!</button>
        </form>
      )}
    </div>
  );
};
export default Form;
