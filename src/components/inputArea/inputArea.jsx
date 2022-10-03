import React, { useState } from "react";
import styles from "./inputArea.module.css";
import TasksArea from "../tasksArea/tasksArea";

const InputArea = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
    // console.log(task);
  };

  function handleSubmit(e) {
    const generatedId = Math.random().toString(16).slice(2);
    const taskObj = { id: generatedId, text: task, done: false };
    e.preventDefault();

    setTasks([...tasks, taskObj]);
    setTask("");
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit(e);
        }}
        className={styles.inputArea}
      >
        <h3>Введите следующее запланированное действие:</h3>
        <textarea
          name="task"
          value={task}
          placeholder="Введите следующее дело..."
          onChange={handleChange}
        ></textarea>
        <button>Добавить дело!</button>
      </form>
      <TasksArea tasks = {tasks} task = {task} setTasks ={setTasks}/>
    </div>
  );
};

export default InputArea;
