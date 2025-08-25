
import React,{useState} from "react";
import './../styles/App.css';
import Tasks from "./Tasks"



const data = [];
const App = () => {
  const[tasks ,setTasks] = useState(data)
  const[value , setValue] = useState("")
  return (
    <div>
        {/* Do not remove the main div */}
        
        <div>
          <p>To-Do List</p>
        <input className="input" name="task" placeholder="Enter the task" value={value}
         onChange={(e)=>{
               setValue(e.target.value)
        }} />
        <br/>
        <button onClick={()=>{
              if(!value)
              return 
              let newtask ={
                task : value,
                id : tasks.length+1
              }  
              setTasks([...tasks , newtask])
              
        }}>Add Task</button>
        </div>
        <ul>
          {
            tasks.map((item)=>{
               return (
                <Tasks tasks={item.task} setTasks={item.setTasks} task={item}/>
               )
            })
          }
        </ul>
    </div>
    
  )
}

export default App
