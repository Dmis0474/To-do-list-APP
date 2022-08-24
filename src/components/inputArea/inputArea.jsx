import React, { useState , useId } from "react";
import styles from "./inputArea.module.css"

const InputArea = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  // const [deletedTask, deleteTask] = useState([]);
 
  const handleChange = (e) => {
    setTask(e.target.value);
    // console.log(task);
  }


  function handleSubmit(e) {
    const generatedId = Math.random().toString(16).slice(2)
    e.preventDefault();
    const taskObj = {id: generatedId, text: task, done: false} 
    if (e.type === 'click') {
    setTasks([...tasks, taskObj])
    setTask('');
    }
    if (e.key === 'Enter') {
      setTasks([...tasks, taskObj])
      setTask('');
    } 
  }

  function handleDelete(e) {
    // console.log(e.target.parentNode.getAttribute('id'))
    setTasks(tasks.filter((task) => task.id !== e.target.parentNode.getAttribute('id')))
  }


  function taskDone(e) { 
      e.target.parentNode.style.textDecorationLine = 'line-through';
  }





 let taskList = tasks.map((task, index) => {
    return (<li id={task.id} key={task.id}>
      {task.text}
      <button onClick={handleDelete}>Удалить</button>
      <button onClick={taskDone}>Задача выполнена!</button>
      </li>)
  })

  return (
    <div>
    <form onClick={handleSubmit} onKeyDown={handleSubmit} className={styles.inputArea}>
      <h3>Введите следующее запланированное действие:</h3>
      <textarea name="task" value={task} placeholder="Введите следующее дело..." onChange={handleChange}></textarea>
      <button>Добавить дело!</button>
    </form>
    <ul>
    Дела:
    {taskList}
  </ul>
  </div>
  );
}

export default InputArea;