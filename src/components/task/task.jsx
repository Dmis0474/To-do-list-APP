import React, { useState } from "react";

const Task = (props) => {

    
    

    


    
      
    
     

    return <div>
         <li id={props.task.id} key={props.task.id}>
      
      {props.task.id === edtiableTaskId && editMode ? (
        <div>
        <input
          type="text"
          defaultValue={props.task.text}
          key={props.task.id}
          id={props.task.id}
          title={props.task.text}
          onChange={(event) => setInputValue(event.target.value)}
        />
        
        </div >
      ) : (
        <p>{props.task.text}</p>
      )}
      <button onClick={props.handleDelete}>Удалить</button>
      <button onClick={props.taskDone}>Задача выполнена!</button>
      
      {editMode ? (
        <button onClick={(e) => {
          props.editSubmit(e);
          setEditMode(false)
        }

        }>Запомнить</button>
      ) : (
        <button
          onClick={(e) => {
            setEditMode(!editMode)
            setEdtiableTaskId(e.target.parentNode.getAttribute("id"));
            props.task = e.target.value
           
            
            // task.id === edtiableTaskId ? setEditMode(!editMode) : setEditMode(editMode);
          }}
        >
          Редактировать задачу
        </button>
      )}
    </li>
        </div>
}

export default Task