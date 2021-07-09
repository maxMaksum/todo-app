import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Home({filteredPokemon}) {
   

    const [pokemonName, setName] = useState([])

    useEffect(()=>{
        async function fetchPokemon (){
         const filterName = filteredPokemon.map(name=>(name))
         await setName (filterName)
         return
        }

        fetchPokemon()
    },[pokemonName])

    if (pokemonName!==null){
        console.log(pokemonName)
    }

   
 
    return (
        <div className="mt-10 p-4 flex flex-wrap">
            {
                
            pokemonName.length !== 0? (pokemonName.map((val, idx)=>(
                <div className="ml-4 text-2xl text-blue-400">
                     <Link to={`/about/${idx+1}`} key={idx}>{val}</Link>
                </div>
            ))): <div>search Pokemon </div>
            }
        </div>
    )
}

export default Home
