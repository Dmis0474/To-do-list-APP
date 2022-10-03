import React, { useState } from "react";
import styles from "./tasksArea.module.css";


const TasksArea = (props) => {

  
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [edtiableTaskId, setEdtiableTaskId] = useState("")
  // const [deletedTask, deleteTask] = useState([]);

  console.log(props.tasks)
  console.log(props.task)

  function handleDelete(e) {
    // console.log(e.target.parentNode.getAttribute('id'))
    props.setTasks(
      props.tasks.filter((task) => task.id !== e.target.parentNode.getAttribute("id"))
    );
  }

  function taskDone(e) {
    e.target.parentNode.style.textDecorationLine = "line-through";
  }

  function editSubmit(e) {
    // берем задачу, которую нужно торедактировать, изменяем текст    
    const editedTask = props.tasks.find(task => task.id === e.target.parentNode.getAttribute("id"))
    editedTask.text = inputValue;
    console.log('editedTask', editedTask);

    // берем все отсальные задачи, кроме редактируемой
    const noEditedTasks = props.tasks.filter((task) => task.id !== e.target.parentNode.getAttribute("id"))
    console.log('noEditedTasks', noEditedTasks);

    // записываем в tasks
    props.setTasks([...noEditedTasks, editedTask]);
    console.log('tasks after editing', props.tasks);
    
    setEditMode(false)

    // let newTasks = [...tasks];
    // setTasks(
    //   newTasks.filter((task) => task.id === e.target.parentNode.getAttribute("id"))
    // );
    // console.log(newTasks)
  }

  let taskList = props.tasks.map((task, index) => {
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
          defaultValue={task.text}
          key={task.id}
          id={task.id}
          title={task.text}
          onChange={(event) => setInputValue(event.target.value)}
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
    </li>)
    
});

  return (
    <div>
       {taskList}
    </div>
  )
}


export default TasksArea