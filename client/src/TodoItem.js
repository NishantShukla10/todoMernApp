import React, {useState} from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE = "http://localhost:4000/api/v1";

function TodoItem(props){
    const {name, id, setItems} = props

    const deleteTodo = async(id) => {
        try {
          const response = await fetch(`${API_BASE}/todos/delete/${id}`, {
            method: "DELETE",
          });

          if(!response.ok){
            throw new Error("Faild to delete a task");
          }

          const data = await response.json();
          setItems(items => items.filter(item => item._id !== data._id));

          toast.error("Item deleted successfully");
          
        } catch (error) {
          console.error("Error updating task status:", error);
        }
    }


    return(
     <div className="todo">
        <div className="text">{name}</div>
        <div className="delete-todo" onClick={()=>deleteTodo(id)}>
          <span >X</span>
        </div>
      </div>
    )
}

export default TodoItem;