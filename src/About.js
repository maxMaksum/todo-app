import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
function About() {
    const {slug} = useParams()
    const [pokemonName, setPokemonName] = useState([])
    const [pokemonPicture, setPokemonPicture] = useState({})

  

    useEffect(async()=>{
        async function fetchData() {
            // You can await here
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
            // ...
            const data = await res.json()
            
            const pokemonImage = await data.sprites

            setPokemonName(data.species.name)
            setPokemonPicture(pokemonImage)
          }
        
        fetchData()
       
      }, [slug])


    console.log(pokemonName)
    console.log(pokemonPicture.back_shiny)

   
   
    return (
        <div className="w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex flex-col items-center justify-center">
            <h3 className="text-2xl text-green-900 uppercase">{pokemonName}</h3>
            <div className="flex justify-center">

            <img className="w-48" src={pokemonPicture.back_shiny}/>

            </div>
        </div>
    )
}

export default About
