import React, { useState } from "react";
import Task from "../task/task";



const Tasks = (props) => {

  console.log(props.tasks)
  console.log(props.task)
  
 

  let taskList = props.tasks.map((task, index) => {
    return (

      <Task task={props.task} tasks={props.tasks} handleDelete={props.handleDelete} taskDone={props.taskDone} editSubmit={props.editSubmit}/>
   )
    
});

  return (
    <div>
       {taskList} 
    </div>
  )
}


export default Tasks