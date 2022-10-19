import React, { useState, useEffect } from "react";
import styles from "./layout.module.css";
import Task from "../task/task";
import Form from "../form/form";

const Layout = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [edtiableTaskId, setEdtiableTaskId] = useState("");
  const [deadline, setDeadline] = useState("");
  const [dateNow, setDateNow] = useState("");
  const [taskDoneStyle, setTaskDoneStyle] = useState(false);

  const [editDateValue, setEditDateValue] = useState("");
  useEffect(() => {
    getDates();
  }, []);

  const getDates = () => {
    setDateNow(
      `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()}`
    );
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (e) => {
    setTasks(
      tasks.filter((task) => task.id !== e.target.parentNode.getAttribute("id"))
    );
  };

  const taskDone = (e) => {
    const doneTasks = tasks.map(task => (task.id === e.target.parentNode.getAttribute("id")) ?
    {...task, done: true} : {...task})
    setTasks([...doneTasks])
  };

  const handleSubmit = (e) => {
    const generatedId = Math.random().toString(16).slice(2);
    const newTask = {
      id: generatedId,
      text: task,
      deadline: deadline,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
    setDeadline("");
    e.preventDefault();
  };

  const editSubmit = (e) => {
    const editedTask = tasks.map(task => (task.id === e.target.parentNode.getAttribute("id")) ?
    {...task, text:inputValue, deadline:editDateValue} : {...task})
    setTasks([...editedTask])
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
    setDeadline(e.target.value);
    // console.log(`deadline: ${deadline}`);
  };

  const editDateListener = (event) => {
    setEditDateValue(event.target.value);
    console.log(`11111:${editDateValue}`);
  };

  return (
    <div>
      <h3>Введите следующее запланированное действие:</h3>
      <Form
        dateNow={dateNow}
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
              task={task}
              id={task.id}
              key={task.text.toString() + i}
              editMode={editMode}
              edtiableTaskId={edtiableTaskId}
              handleDelete={handleDelete}
              taskDone={taskDone}
              editSubmit={editSubmit}
              editTasks={editTasks}
              inputListener={inputListener}
              dateListener={dateListener}
              dateNow={dateNow}
              editDateListener={editDateListener}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
