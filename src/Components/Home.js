import {Link, useLocation} from "react-router-dom"
import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
function Home(){
    const {addTask} = useContext(TaskContext)
    const location = useLocation();
    const[input, setInput] = useState("")
    function clickHandler(){
        if(input.trim() === "") 
            return;
        addTask(input);
        setInput("");
    }
    const activeCategory = location.pathname === "/completed"
        ? "completed"
        : location.pathname === "/incomplete"
            ? "incomplete"
            : "all";

    return (
        <div className="home">
            <div className="container">
                <h1>MY TASKS</h1>
                <p className="subtitle">Stay focused, one task at a time.</p>
                <ul className= "categories">
                    <li><Link to ="/all" className={activeCategory === "all" ? "active" : ""}>All</Link></li>
                    <li><Link to="/completed" className={activeCategory === "completed" ? "active" : ""}>Completed</Link></li>
                    <li><Link to="/incomplete" className={activeCategory === "incomplete" ? "active" : ""}>Incomplete</Link></li>
                </ul> 
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    clickHandler()
                }}>
                    <input type= "text" placeholder="What needs to be done?" aria-label="Task title" value={input} onChange={(e) =>{setInput(e.target.value)}}/>
                    <input type="submit" value="ADD TASK" />
                </form>
            </div>
        </div>
    )
}
export default Home;
