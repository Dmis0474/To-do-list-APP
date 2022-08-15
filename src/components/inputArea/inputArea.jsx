import React, { useState } from "react";
import styles from "./inputArea.module.css"

const InputArea = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


  const handleChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  }


  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task])
    console.log(tasks);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.inputArea}>
      <h3>Введите следующее запланированное действие:</h3>
      <textarea name="task" placeholder="Введите следующее дело..." onChange={handleChange}></textarea>
      <button onClick={handleSubmit}>Добавить дело!</button>
      <button>Вычеркнуть последнее дело!</button>
      <p>You clicked times</p>
      <div>
        Дела:
        {tasks.map(task => {
          return <div key={task}>{task}</div>
        })}
      </div>
    </form>
  );
}

export default InputArea;