import React from "react";
import styles from "./App.module.css";
import InputArea from "./components/inputArea/inputArea.jsx";

let App = (props) => {
  return (
    <div className={styles.App}>
        <InputArea/>
    </div>
  )
};



export default App;
