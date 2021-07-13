import React,{useContext, useState} from 'react'
import {DataContext} from './DataProvider'
function FooterFom() {

    const[todos, setTodos] = useContext(DataContext)
    const [checkedAll, setCheckAll] = useState(false)
 

    const handleCheckedAll = ()=>{
        setCheckAll(!checkedAll)
        const newTodos = [...todos]
        newTodos.map((todo)=>{
            todo.completed=checkedAll
        })
        setTodos(newTodos)
    
    }

    const confirmDelete = ()=>{
        const newTodos = todos.filter((todo)=>{
            return todo.completed ===false
        })
        
        console.log(newTodos)
        setTodos(newTodos)
       
    }
    return (
        <div className=" bg-gray-50 mx-4 mt-4 flex items-center justify-between p-2">
            <div className="flex items-center p-2 space-x-2">
                <button className="bg-green-500 text-white px-2"
                onClick= {handleCheckedAll}
                >Complete All </button>

                <button className="bg-red-500 text-white px-2"  
                onClick={confirmDelete}>Delete</button>
            </div>
        </div>
    )
}

export default FooterFom
