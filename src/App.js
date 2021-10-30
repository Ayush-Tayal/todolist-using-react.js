import './App.css';
import Todos from './components/Todos'
import {useState} from 'react'
 
function App() {
  const [inputValue, setIpValue] = useState("");
  const [todolists, setTodolist] = useState([]);
  
  const handleOnClick=()=>{
    // setTodolist(...todolists, inputValue)

    todolists.push(inputValue);
    setTodolist(todolists);
    setIpValue(" ");

  }
  
  console.log("todolist array", todolists);

  return (
    <>
    <div className="container my-1">
      <h1>To-do-list</h1>
      <input type="text"  placeholder = "Enter Todos" value={inputValue} onChange={(e)=>setIpValue(e.target.value)} />
      <button className="addtodo btn btn-primary mx-3" onClick = {handleOnClick}> Add </button >
    </div>

    <Todos todolists = {todolists} />




    </>
  );
}

export default App;
