import React, { useState } from "react";
import styles from "./inputArea.module.css";

const InputArea = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("");
  const [edtiableTaskId, setEdtiableTaskId] = useState("")
  // const [deletedTask, deleteTask] = useState([]);

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

  function handleDelete(e) {
    // console.log(e.target.parentNode.getAttribute('id'))
    setTasks(
      tasks.filter((task) => task.id !== e.target.parentNode.getAttribute("id"))
    );
  }

  function taskDone(e) {
    e.target.parentNode.style.textDecorationLine = "line-through";
  }

  function editSubmit(e) {
    // берем задачу, которую нужно торедактировать, изменяем текст    
    const editedTask = tasks.find(task => task.id === e.target.parentNode.getAttribute("id"))
    editedTask.text = value;
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

  let taskList = tasks.map((task, index) => {
    return (
      <li id={task.id} key={task.id}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
            // console.log(event.target.checked);
          }}
        />
        {task.id === edtiableTaskId && editMode ? (
          <div>
          <input
            type="text"
            value={value}
            key={task.id}
            id={task.id}
            title={task.text}
            onChange={(event) => setValue(event.target.value)}
          />
          
          </div >
        ) : (
          <p>{task.text}</p>
        )}
        <button onClick={handleDelete}>Удалить</button>
        <button onClick={taskDone}>Задача выполнена!</button>
        
        {editMode ? (
          <button onClick={(e) => {
            editSubmit(e);
            setEditMode(false)
          }

          }>Запомнить</button>
        ) : (
          <button
            onClick={(e) => {
              setEditMode(!editMode)
              setEdtiableTaskId(e.target.parentNode.getAttribute("id"));
              task = e.target.value
             
              
              // task.id === edtiableTaskId ? setEditMode(!editMode) : setEditMode(editMode);
            }}
          >
            Редактировать задачу
          </button>
        )}
      </li>
    );
  });

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
      <ul>
        Дела:
        {taskList}
      </ul>
    </div>
  );
};

export default InputArea;
