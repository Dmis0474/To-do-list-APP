import React from "react";
import styles from "./App.module.css";
import InputArea from "./components/inputArea/inputArea.jsx";
import ToDoList from './components/to-do-list/to-do-list'

let App = (props) => {
  return (
    <div className={styles.App}>
        <InputArea/>
        <ToDoList/>
    </div>
  )
};



export default App;
