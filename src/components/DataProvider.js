import React, {useState, createContext, useEffect} from 'react'


export const DataContext = createContext()

function DataProvider({children}) {
    const [todos, setTodos] = useState([])
    
    useEffect(()=>{
        const newTodos =JSON.parse(localStorage.getItem('todoItem')) 
        if(newTodos) setTodos(newTodos)
    }, [])
    
    useEffect(()=>{
        localStorage.setItem("todoItem", JSON.stringify(todos)) 
    }, [todos])

   

   

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
