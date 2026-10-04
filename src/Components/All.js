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
            <div className = {`detail${task.completed ? " task-completed" : ""}`} key={task.id}>
                <li id={String(task.id)}>
                    {task.title} 
                </li>
                <div className = "icons" >
                    <CheckCircleIcon className={`done${task.completed ? " is-complete" : ""}`}
                    role="button"
                    tabIndex={0}
                    aria-pressed={task.completed}
                    aria-label={task.completed ? `Mark ${task.title} as incomplete` : `Mark ${task.title} as complete`}
                    onClick={()=>{completedTasks(task.id)}}
                    onKeyDown={(event)=>{
                        if(event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            completedTasks(task.id);
                        }
                    }}/>
                    <Link to = {`/edit/${task.id}`} aria-label={`Edit ${task.title}`}><CreateOutlinedIcon className="edit"/></Link>
                    <DeleteIcon className="delete" role="button" tabIndex={0} aria-label={`Delete ${task.title}`} onClick={()=>{deleteTask(task.id)}} onKeyDown={(event)=>{
                        if(event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            deleteTask(task.id);
                        }
                    }} />
                </div>
            </div>
        )
    })
    return (
        <div className="all">
            <div className="container">
                {myTasks.length > 0 ? myTasks : <p className="empty-state">No tasks yet. Add your first task above.</p>}
            </div>
        </div>
    )
}
export default All;
