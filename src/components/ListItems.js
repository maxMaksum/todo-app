import React, {useState, useContext} from 'react'
import {DataContext} from './DataProvider'
function ListItems({name, completed, id}) {

    const[onEdit, setOnEdit] = useState(true)
    const[editValue, setEditValue] = useState(name)
    const [checkedValue, setCheckedValue] = useState(completed)
    const[todos, setTodos] = useContext(DataContext)

    const handleSave = (id)=>{
        const newTodos = [...todos]
        newTodos.map((todo, index)=>{
            if(id===index) todo.name =editValue
        })
        setTodos(newTodos)
        setOnEdit(!onEdit)

    }

    const handleDelete = (id)=>{
        console.log(id)
        const newTodos =todos.filter((todo, index)=>{
            return index !==id
        }
        )
        setTodos(newTodos)
    }

    
    const handleChecked = (id)=>{
        console.log(id)
        setCheckedValue(!checkedValue)
        console.log(checkedValue)
        const newTodos =[...todos]
        newTodos.map((todo, index)=>{
            if(id===index)todo.completed=checkedValue
        })
        setTodos(newTodos)
    }

  
    return (
        <div id={id} className="flex p-2 rounded">
            <div className=" bg-green-200 flex items-center flex-grow px-2">
                {onEdit ?
                    <div className="flex items-center">
                        <input
                         type="checkbox" 
                         checked={completed}
                         onChange={()=>handleChecked(id)}
                         />
                        <p className="p-2 capitalize">{name}</p>
                    </div> : <div>
                        <input
                            type="text"
                            value={editValue}
                            onChange ={(e)=>setEditValue(e.target.value)}
                        />
                    </div>
                }
            </div>
            <div className="flex p-2 justify-between items-center space-x-4">
                {!onEdit?
                <button onClick={()=>handleSave(id)}className="bg-green-500 text-white px-2 rounded">Save</button>:
                <button onClick={()=>setOnEdit(!onEdit)}className="bg-green-500 text-white px-2 rounded">Edit</button>
                }
                
                <button onClick={()=>handleDelete(id)}className="bg-red-500 text-white px-2 rounded">Delete</button>
            </div>


        </div>
    )
}

export default ListItems
