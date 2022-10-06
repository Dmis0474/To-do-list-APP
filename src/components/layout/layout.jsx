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

    // let newTasks = [...tasks];
    // setTasks(
    //   newTasks.filter((task) => task.id === e.target.parentNode.getAttribute("id"))
    // );
    // console.log(newTasks)
  }

  const submitChanges = (e) => {
    editSubmit(e);
    setEditMode(false);
  };

  const editTasks = (e) => {
    setEditMode(!editMode);
    setEdtiableTaskId(e.target.parentNode.getAttribute("id"));
    task = e.target.value;
    // task.id === edtiableTaskId ? setEditMode(!editMode) : setEditMode(editMode);
  };

  const inputListener = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h3>Введите следующее запланированное действие:</h3>
      <Form task={task} handleSubmit={handleSubmit} handleChange={handleChange} />
      <div>
        {tasks.map((task) => {
          return (
            <Task
              tasks={tasks}
              task={task}
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
