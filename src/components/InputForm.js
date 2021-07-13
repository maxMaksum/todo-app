import React, {useContext, useState, useEffect } from 'react'
import {DataContext} from "./DataProvider"

function InputForm() {

    const [todos, setTodos]= useContext(DataContext)

    const [name, setName] =useState("")
 
    const handleAddTodo =(e)=>{
        e.preventDefault()
        setName(name)
        if(name){
            setTodos([...todos, {name:name, completed:false}])
        }
        
        setName("")
    }



    console.log(todos)
    return (
        <div>
            <form>
            <input 
            type="text"
            placeholder="What You Need To Do"
            className="p-2 rounded"
            value={name}
            onChange = {(e)=>setName(e.target.value)}
            />

            <button onClick ={handleAddTodo}>Create Todo</button>
            </form>
        </div>
    )
}

export default InputForm
