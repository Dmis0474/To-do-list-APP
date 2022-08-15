import React, { useState }  from "react";
import styles from "./inputArea.module.css"

const InputArea = () => {


  let dealsArray = []

 
   
    const [myVariable, setMyVariable] = useState([]);

   function heandleChange(event) {
      console.log(event.target.value)
      setMyVariable(myVariable => {return [...myVariable, ...event.target.value]})
      
      // console.log(myVariable)
    }

    function handleSubmit(e){
      e.preventDefault();
      myVariable.join('')
      dealsArray.push(myVariable)
      console.log(`итог - ${dealsArray}`)
    }
  
 
   
  
  return (
    <form onSubmit={handleSubmit} className={styles.inputArea}>
      <h3>Введите следующее запланированное действие:</h3>
      <textarea placeholder="Введите следующее дело..." onChange={heandleChange}></textarea>
      <button onClick={heandleChange}>Добавить дело!</button>
      <button>Вычеркнуть последнее дело!</button>
      <p>You clicked times</p>
      <p>{dealsArray}</p>
    </form>
  );
}

export default InputArea;