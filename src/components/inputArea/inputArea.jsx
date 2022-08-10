import React, { useState }  from "react";
import styles from "./inputArea.module.css"

const InputArea = () => {

  let newDealElement = React.createRef();
  // let text = newDealElement.current.value;
  let dealsArray = []

 
    const [count, setCount] = useState(0)
  
  return (
    <form className={styles.inputArea}>
      <h3>Введите следующее запланированное действие:</h3>
      <textarea placeholder="Введите следующее дело..." ref={newDealElement}></textarea>
      <button onClick={() => setCount(count + 1)}>Добавить дело!</button>
      <button>Вычеркнуть последнее дело!</button>
      <p>You clicked {count} times</p>
      <p>{dealsArray}</p>
    </form>
  );
}

export default InputArea;