import {Link} from "react-router-dom"
import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
function Home(){
    const {addTask} = useContext(TaskContext)
    const[input, setInput] = useState("")
    function clickHandler(){
        if(input.trim() === "") 
            return;
        addTask(input);
        setInput("");
    }
    const[active, setAcitve] = useState(null);
    function setButton(category) {
        setAcitve(category);
    }
    
    const buttonStyle = (category) => ({
        backgroundColor: active === category ? 'rgb(130, 116, 209)' : '#f0f0f0', 
        color: active === category ? 'white' : 'black',
    });
    return (
        <div className="home">
            <div className="container">
                <h1>MY TASKS</h1>
                <ul className= "categories">
                    <Link to ="/all"><li onClick={()=>{setButton("all")}} style={buttonStyle("all")}>All</li></Link>
                    <Link to="/completed"><li onClick={()=>{setButton("complete")}} style={buttonStyle("complete")}>Completed</li></Link>
                    <Link to="/incomplete"><li onClick={()=>{setButton("incomplete")}} style={buttonStyle("incomplete")}>Incomplete</li></Link>
                </ul> 
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    clickHandler()
                }}>
                    <input type= "text" placeholder="Title of Task" value={input} onChange={(e) =>{setInput(e.target.value)}}/>
                    <input type="submit" value="ADD TASK" />
                </form>
            </div>
        </div>
    )
}
export default Home;