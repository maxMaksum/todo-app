import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react';
import InputForm from './components/InputForm';
import DataProvider from './components/DataProvider';
import ListTodos from './components/ListTodos';
import FooterFom from './components/FooterFom';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [text, setText] = useState("")


 


  return (
    <DataProvider>
      <div className="App  h-96  text-2xl text-green-500 min-h-full max-w-3xl bg-gray-100 mx-auto">
          <p>Hello World</p>
          <InputForm/>
          <ListTodos/>
          <FooterFom />

      </div>
    </DataProvider>
  
  );
}

export default App;
