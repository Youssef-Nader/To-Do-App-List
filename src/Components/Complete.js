import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function Complete(){
    const {tasks, deleteTask, completedTasks} = useContext(TaskContext);
    const completed = tasks.filter((task)=> task.completed);
    const completedTaskList = completed.map((task)=>{
        return(
            <div className = "detail task-completed" key={task.id}>
                <li id={String(task.id)}>
                    {task.title} 
                </li>
                <div className = "icons compact">
                    <CheckCircleIcon className="done is-complete" role="button" tabIndex={0} aria-label={`Mark ${task.title} as incomplete`} aria-pressed="true" onClick={()=>{completedTasks(task.id)}} onKeyDown={(event)=>{
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
        <div className="complete">
            <div className="container">
                {completedTaskList.length > 0 ? completedTaskList : <p className="empty-state">Completed tasks will appear here.</p>}
            </div>
        </div>
    )
}
export default Complete
