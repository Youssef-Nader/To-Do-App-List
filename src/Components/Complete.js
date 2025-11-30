import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Complete(){
    const {tasks,deleteTask} = useContext(TaskContext);
    const completed = tasks.filter((task)=> task.completed);
    const completedTaskList = completed.map((task)=>{
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
        <div className="complete">
            <div className="container">
                {completedTaskList}
            </div>
        </div>
    )
}
export default Complete