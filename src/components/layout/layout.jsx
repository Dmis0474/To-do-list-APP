import React, { useState } from "react";
import styles from "./layout.module.css";
import Task from "../task/task";
import Form from "../form/form";

const Layout = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [edtiableTaskId, setEdtiableTaskId] = useState("");
  const [deadline, setDeadline] = useState("")
  const [deadlines, setDeadlines] = useState([])


  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (e) => {
    setTasks(
      tasks.filter((task) => task.id !== e.target.parentNode.getAttribute("id"))
    );
  };

  const taskDone = (e) => {
    e.target.parentNode.style.textDecorationLine = "line-through";
  };

  const handleSubmit = (e) => {
    const generatedId = Math.random().toString(16).slice(2);
    const taskObj = { id: generatedId, text: task, time:deadline, done:false };
    setTasks([...tasks, taskObj]);
    setTask(""); 
    let newDeadLine = deadline;
    setDeadlines([...deadlines, newDeadLine])
    setDeadline("")
    console.log(`deadlines:${deadlines}`)
    e.preventDefault();
  };

  const editSubmit = (e) => {

    // берем задачу, которую нужно торедактировать, изменяем текст
    const editedTask = tasks.find(
      (task) => task.id === e.target.parentNode.getAttribute("id")
    );
    editedTask.text = inputValue;
    console.log("editedTask", editedTask);

    // берем все отсальные задачи, кроме редактируемой
    const noEditedTasks = tasks.filter(
      (task) => task.id !== e.target.parentNode.getAttribute("id")
    );
    console.log("noEditedTasks", noEditedTasks);

    // записываем в tasks
    setTasks([...noEditedTasks, editedTask]);
    console.log("tasks after editing", tasks);

    setEditMode(false);
  };

 

  const editTasks = (e) => {
    setEditMode(!editMode);
    setEdtiableTaskId(e.target.parentNode.getAttribute("id"));
  };

  const inputListener = (event) => {
    setInputValue(event.target.value);
  };

  const dateListener = (e) => {
    setDeadline(e.target.value)
    console.log(`deadline: ${deadline}`)
  };



  return (
    <div>
      <h3>Введите следующее запланированное действие:</h3>
      <Form
        deadline={deadline}
        updateTask={false}
        task={task}
        key={task.id}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        dateListener={dateListener}
      />
      
      <div>
        {tasks.map((task, i) => {
          return (
            <Task
              deadlines={deadlines}
              task={task}
              id = {task.id}
              key={task.text.toString()+i}
              editMode={editMode}
              edtiableTaskId={edtiableTaskId}
              handleDelete={handleDelete}
              taskDone={taskDone}
              editSubmit={editSubmit}
             
              editTasks={editTasks}
              inputListener={inputListener}
              dateListener={dateListener}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
