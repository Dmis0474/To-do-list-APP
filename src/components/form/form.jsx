import React from "react";
import styles from "./form.module.css";

const Form = (props) => {
  return (
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
      <button>Добавить дело!</button>
    </form>
  );
};
export default Form;
