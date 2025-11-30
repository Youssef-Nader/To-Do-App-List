import { Link, useParams } from "react-router-dom";
import All from "./All";
import {useContext, useState} from "react";
import { TaskContext } from "../context/TaskContext";

function Edit(){
    const{taskId} = useParams();
    const {editTasks} = useContext(TaskContext);
    const [input, setInput] = useState("");
    function editHandler() {
        if(input.trim() === "") return;
        editTasks(taskId, input);
        setInput("");
    }
    return(
        <>
            <All/>
            <div className = "edit-task">
                <div className="container" >
                    <form>
                        <input type="text" placeholder="Edit Your Task" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                        <Link to ="/all"><input type="submit" value="EDIT" onClick={editHandler}/></Link>
                        <Link to ="/all"><button>Cancel</button></Link>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Edit;