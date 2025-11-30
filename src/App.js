import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import All from './Components/All';
import { TaskProvider } from './context/TaskContext';
import Complete from './Components/Complete';
import Incomplete from "./Components/Incomplete";
import Edit from "./Components/Edit";
function App() {
  return (
    <TaskProvider>
        <div className='app'>
          <Home />  
          <Routes>
            <Route path="/" element={<All/>}/>
            <Route path="/all" element={<All/>}/>
            <Route path="/completed" element={<Complete/>}/>
            <Route path = "/incomplete" element = {<Incomplete/>} />
            <Route path = "/edit/:taskId" element = {<Edit/>} />
          </Routes>
        </div>
    </TaskProvider>
  );
}

export default App;
