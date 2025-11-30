import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import DeleteIcon from '@mui/icons-material/Delete';

function Incomplete(){
    const {tasks, deleteTask} = useContext(TaskContext);
    const incompleteTasks = tasks.filter((task)=> !task.completed);
    const incompleteTasksList = incompleteTasks.map((task)=>{
        return(
            <div className = "detail" key={task.id}>
                <li id={String(task.id)}>
                    {task.title} 
                </li>
                <div className = "icons" style={{width: "5%"}}>  
                    <DeleteIcon className="delete" color="error" style={{ cursor:"pointer",border : "1px solid red",borderRadius : "50%", background:"white"}} onClick={()=>{deleteTask(task.id)}} />
                </div>
            </div>
        )
    })
    return(
        <div className="incomplete">
            <div className="container">
                {incompleteTasksList}
            </div>
        </div>
    )
}
export default Incomplete;