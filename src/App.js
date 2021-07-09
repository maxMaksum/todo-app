import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react';
import About from './About';
import Home from './Home';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [text, setText] = useState("")

  useEffect(
    ()=>{
      let controller = new AbortController();

      async function fetchPokemon(){
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
        const data = await res.json()
        const results = await data.results

        const newPokemon = results&&results.map((val)=>{
          return val.name
        })
        setPokemon({newPokemon})

        return () => controller?.abort();
        
      }

      fetchPokemon()

      return ()=>console.log("clean up")
  }, [])

 

  useMemo(()=>{
    if(text.length === 0){
      setFilteredPokemon([])
      return
    }
    setFilteredPokemon(()=>pokemon.newPokemon&&pokemon.newPokemon.filter((pokemon)=>pokemon.includes(text)))

  },[pokemon, text])

  git
  return (
    <Router>
      <div className="App">
          <p className="text-2xl text-green-500">Hello World</p>
         
          <div className="p-14">
            <div className="flex flex-col items-center">
              <Link to="./"className="text-4xl text-yellow-700">pokemon's picker</Link>

            </div>

            <div
            className="w-full flex justify-center"
            >
              <input
              onChange ={(e)=>setText(e.target.value)}
              type="text"
              placeholder="Enter Pokemon Here"
              className="mt-10 p-2 border-blue-500 border-2"
              />
            </div>

          </div>

      </div>
      <Switch>
        <Route path = "/about/:slug">
          <About></About>

        </Route>
        <Route path = "/">
        {filteredPokemon&&<Home filteredPokemon={filteredPokemon}/>}

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
