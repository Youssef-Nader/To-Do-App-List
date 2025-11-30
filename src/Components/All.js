import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import {Link} from "react-router-dom";
function All(){
    const {tasks, deleteTask, completedTasks} = useContext(TaskContext);
    
    const myTasks = tasks.map((task)=>{
        return(
            <div className = "detail" key={task.id}>
                <li id={String(task.id)}>
                    {task.title} 
                </li>
                <div className = "icons" >
                    <CheckCircleIcon className="done" style={{
                        cursor: "pointer",
                        color: task.completed ? "green" : "white"
                    }} onClick={()=>{completedTasks(task.id)}}/>  
                    <Link to = {`/edit/${task.id}`}><CreateOutlinedIcon className="edit" color="primary" style={{cursor:"pointer",border: "1px solid blue",borderRadius : "50%", background:"white"}}/></Link>
                    <DeleteIcon className="delete" color="error" style={{ cursor:"pointer", border : "1px solid red",borderRadius : "50%", background:"white"}} onClick={()=>{deleteTask(task.id)}} />
                </div>
            </div>
        )
    })
    return (
        <div className="all">
            <div className="container">
                {myTasks}
            </div>
        </div>
    )
}
export default All;