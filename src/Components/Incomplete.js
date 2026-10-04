import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Incomplete(){
    const {tasks, deleteTask, completedTasks} = useContext(TaskContext);
    const incompleteTasks = tasks.filter((task)=> !task.completed);
    const incompleteTasksList = incompleteTasks.map((task)=>{
        return(
            <div className = "detail" key={task.id}>
                <li id={String(task.id)}>
                    {task.title} 
                </li>
                <div className = "icons compact">
                    <CheckCircleIcon className="done" role="button" tabIndex={0} aria-label={`Mark ${task.title} as complete`} aria-pressed="false" onClick={()=>{completedTasks(task.id)}} onKeyDown={(event)=>{
                        if(event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            completedTasks(task.id);
                        }
                    }} />
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
    return(
        <div className="incomplete">
            <div className="container">
                {incompleteTasksList.length > 0 ? incompleteTasksList : <p className="empty-state">You are all caught up!</p>}
            </div>
        </div>
    )
}
export default Incomplete;
