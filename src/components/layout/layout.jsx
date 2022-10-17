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

  const handleChange = (e) => {
    setTask(e.target.value);
    setInputValue(e.target.value);
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
    const taskObj = { id: generatedId, text: task, done: false };
    e.preventDefault();
    setTasks([...tasks, taskObj]);
    setTask("");
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

  const submitChanges = (e) => {
    editSubmit(e);
    setEditMode(false);
    console.log(task.text)
  };

  const editTasks = (e) => {
    setEditMode(!editMode);
    setEdtiableTaskId(e.target.parentNode.getAttribute("id"));
  };

  const inputListener = (event) => {
    setInputValue(event.target.value);
  };



  return (
    <div>
      <h3>Введите следующее запланированное действие:</h3>
      <Form
        updateTask={false}
        task={task}
        key={task.id}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        
      />
      
      <div>
        {tasks.map((task, i) => {
          return (
            <Task
              task={task}
              id = {task.id}
              key={task.text.toString()+i}
              editMode={editMode}
              edtiableTaskId={edtiableTaskId}
              handleDelete={handleDelete}
              taskDone={taskDone}
              editSubmit={editSubmit}
              submitChanges={submitChanges}
              editTasks={editTasks}
              inputListener={inputListener}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
