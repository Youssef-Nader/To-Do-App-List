import {createContext, useState, useEffect} from "react";

// create context
export let TaskContext = createContext();

// create provider
export function TaskProvider({children}) {
    // make useState for tasks
    const savedTasks = JSON.parse(localStorage.getItem("myTasks")) || [];
    const[tasks, setTasks] = useState(savedTasks)

    useEffect(()=>{
        localStorage.setItem("myTasks",JSON.stringify(tasks));
    },[tasks])
    // create function for add tasks
    function addTask(input){
        setTasks([... tasks, {id : Date.now(), title: input, completed: false}]);
    }

    // create function for delete tasks
    function deleteTask(id){
        const newTasks = tasks.filter((el)=>{
            return el.id !== id;
        })
        setTasks(newTasks);
    }

    // create function for completed tasks
    function completedTasks(id){
        const updateTask = tasks.map((task)=>{
            if(task.id === id){
                return {...task, completed: true};
            }
            return task;
        });
        setTasks(updateTask);
    }
    
    // create a function to edit on task
    function editTasks(id ,inputEdit){
        const editTask = tasks.map((task)=>{
            if(task.id == id){
                return {... task, title : inputEdit };
            }
            return task;
        })
        setTasks(editTask);
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, deleteTask, completedTasks, editTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

