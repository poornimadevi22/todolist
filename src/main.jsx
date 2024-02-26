import React from 'react'
import ReactDOM from 'react-dom/client'
import Todolist from './App'
import Createtask from './Modals/Createtask'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Todolist /> 
    <Createtask />  
  </React.StrictMode>
)
