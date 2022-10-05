import React, { useState } from "react";
import styles from "./inputArea.module.css";
import Tasks from "../tasks/tasks";

const InputArea = () => {


  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [edtiableTaskId, setEdtiableTaskId] = useState("")

  
  const handleChange = (e) => {
    setTask(e.target.value);
    // console.log(task);
  };

  function handleDelete(e) {
    // console.log(e.target.parentNode.getAttribute('id'))
    setTasks(
    tasks.filter((task) => task.id !== e.target.parentNode.getAttribute("id"))
    );
  }

  function taskDone(e) {
    e.target.parentNode.style.textDecorationLine = "line-through";
  }

  function handleSubmit(e) {
    const generatedId = Math.random().toString(16).slice(2);
    const taskObj = { id: generatedId, text: task, done: false };
    e.preventDefault();

    setTasks([...tasks, taskObj]);
    setTask("");
  }

  function editSubmit(e) {
    // берем задачу, которую нужно торедактировать, изменяем текст    
    const editedTask = tasks.find(task => task.id === e.target.parentNode.getAttribute("id"))
    editedTask.text = inputValue;
    console.log('editedTask', editedTask);

    // берем все отсальные задачи, кроме редактируемой
    const noEditedTasks = tasks.filter((task) => task.id !== e.target.parentNode.getAttribute("id"))
    console.log('noEditedTasks', noEditedTasks);

    // записываем в tasks
    setTasks([...noEditedTasks, editedTask]);
    console.log('tasks after editing', tasks);
    
    setEditMode(false)

    // let newTasks = [...tasks];
    // setTasks(
    //   newTasks.filter((task) => task.id === e.target.parentNode.getAttribute("id"))
    // );
    // console.log(newTasks)
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
      <Tasks tasks={tasks} task={task} handleDelete={handleDelete} taskDone={taskDone} editSubmit={editSubmit}/>
    </div>
  );
};

export default InputArea;
