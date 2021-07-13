import React, {useContext} from 'react'
import {DataContext} from './DataProvider'
import ListItems from './ListItems'
function ListTodos() {

    const [todos, setTodos] = useContext(DataContext)

    console.log(todos)
    return (
        <div>
                {todos.map((todo, index)=>(
                    <div key={index} >
                        <ListItems 
                        name={todo.name}
                        completed={todo.completed}
                        id={index}
                        />
                     </div>
                ))}
        </div>
    )
}

export default ListTodos
