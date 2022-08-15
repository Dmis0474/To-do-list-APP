import React, { useState }  from "react";
import styles from "./inputArea.module.css"

const InputArea = () => {
    let deal = '';
    let dealsArray = [];
    let allDeals = [];


 
   
    const [myVariable, setMyVariable] = useState([]);

   function heandleChange(e) {
      e.preventDefault();
      console.log(e.target.value)
      setMyVariable([...e.target.value])
      console.log(myVariable.join(''))
    }

    

    function handleSubmit(e){
      e.preventDefault();
      deal = myVariable.join('')
      dealsArray.push(deal)
      console.log(dealsArray)
      const allDeals = dealsArray.map((text) =>
  <p>{text}</p>)
      console.log(allDeals)
    }
  

    
 
   
  
  return (
    <form onSubmit={handleSubmit} className={styles.inputArea}>
      <h3>Введите следующее запланированное действие:</h3>
      <textarea placeholder="Введите следующее дело..." onChange={heandleChange}></textarea>
      <button onClick={handleSubmit}>Добавить дело!</button>
      <button>Вычеркнуть последнее дело!</button>
      <p>You clicked times</p>
      <div>
        Дела:
        {allDeals}
      </div>
    </form>
  );
}

export default InputArea;