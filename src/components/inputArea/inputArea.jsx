import React from "react";
import styles from "./inputArea.module.css"

const InputArea = () => {

  let newDealElement = React.createRef();
  // let text = newDealElement.current.value;
  let dealsArray = []

  function addDeal() {
    dealsArray.push("сделать...")
    console.log(dealsArray)
  }
  return (
    <div className={styles.inputArea}>
      <h3>Введите следующее запланированное действие:</h3>
      <textarea placeholder="Введите следующее дело..." ref={newDealElement}></textarea>
      <button onClick={addDeal}>Добавить дело!</button>
      <button>Вычеркнуть последнее дело!</button>
      <p>${dealsArray}</p>
    </div>
  );
}

export default InputArea;