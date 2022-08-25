import React, { useState , useId } from "react";
import styles from "./inputArea.module.css"

const InputArea = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState('')
  // const [deletedTask, deleteTask] = useState([]);
 
  const handleChange = (e) => {
    setTask(e.target.value);
    // console.log(task);
  }


  function handleSubmit(e) {
    const generatedId = Math.random().toString(16).slice(2)
    e.preventDefault();
    const taskObj = {id: generatedId, text: task, done: false} 
    // if (e.type === 'click') {
    setTasks([...tasks, taskObj])
    setTask('');
    // }
    // if (e.key === 'Enter') {
    //   setTasks([...tasks, taskObj])
    //   setTask('');
    // } 
  }

  

  function handleDelete(e) {
    // console.log(e.target.parentNode.getAttribute('id'))
    setTasks(tasks.filter((task) => task.id !== e.target.parentNode.getAttribute('id')))
  }

 


  function taskDone(e) { 
      e.target.parentNode.style.textDecorationLine = 'line-through';
  }

  function editSubmit (e) {
    console.log(task.id)
    console.log(e.target.parentNode.getAttribute('id'))
    setTasks(tasks.map((task) => task.id === e.target.parentNode.getAttribute('id')? {alert(1)}:{alert(2)}))  
  }





 let taskList = tasks.map((task, index) => {
    return (<li 
      id={task.id}
      key={task.id}>
      <input 
      type="checkbox" 
      checked ={checked}
      
      

      onChange = {(event) => {
        setChecked(event.target.checked);
        // console.log(event.target.checked);
      }
      }
      />
      {
      editMode ? 
      (<input 
        type='text' 
        value={value}
        key={task.id}
        id={task.id}
        title={task.text}

        

        onChange ={(event) => setValue(event.target.value)}
        />) : (<p>{task.text}</p>)
      } 
      <button onClick={handleDelete}>Удалить</button>
      <button onClick={taskDone}>Задача выполнена!</button>

      {editMode ?
      (
        <button 
        onClick={editSubmit}
        >Запомнить
      </button>
      ) : (
        <button onClick={() =>{
        setEditMode(!editMode); 
      }
    }
      >Редактировать задачу
      </button>
      )
    }
      
      </li>)
  })

  return (
    <div>
    <form onSubmit={handleSubmit} /*onKeyDown={handleSubmit}*/ className={styles.inputArea}>
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