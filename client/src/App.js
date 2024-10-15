import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from './Services/axiosInterceptor';

// API base
const API_BASE = "http://localhost:4000/api/v1";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  // Store the target's value into the input state 
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter")
      addItem();
  }

  const getTodos = async() => {
    try {
      const response = await axios.get("/todos"); // Axios handles response as JSON automatically
      const data = response.data; // Extracting data from response
      setItems(data); // Assuming you have a setItems function to update state
    } catch (error) {
      console.log(error); // Logging the error if something goes wrong
    }

    // fetch(`${API_BASE}/todos`)
    // .then(res => res.json())
    // .then(data => setItems(data))
    // .catch(err => console.log(err))
  }

  const addItem = async () => {
      try {
        const response = await axios.post('/todo/new', {name: input});
        const data = response.data;
        await getTodos();
        setInput('');
        toast.success("Item added successfully");
        
      } catch (error) {
        toast.error("Something went wrong");
        console.error(error)
      }

      // const data = await fetch(`${API_BASE}/todo/new`, {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     name: input,
      //      })
      // }).then(res => res.json())
      // await getTodos()
      // setInput('')

      // toast.success("Item added successfully");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input type='text'
          className="input"
          value={input} 
          onChange={handleChange}
          onKeyDown={handleKeyDown}  // Add keydown event listener
          placeholder="Add a new todo"
        ></input>

        <button onClick={() => addItem()}>
          <span>ADD</span>
        </button>
      </div>

      <div className="todolist"> 
        {
          items.map((item) => {
            const {_id, name} = item;
            return <TodoItem key ={_id} name={name} id={_id} setItems={setItems} />  
          })
        } 
      </div>

      <ToastContainer />
    </div>
 
  );
}

export default App;