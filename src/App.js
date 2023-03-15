import { useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import imagenRick from './img/RickInicial.png';


function App() {
  const[characters, setCharacters] = useState(null);

const reqApi = async () => {
 
  const api = await fetch("https://rickandmortyapi.com/api/character/?")
  const characterApi = await api.json();
  
  setCharacters(characterApi.results);
};


  return (
    <div className="App">
      
      <header className="App-header">
       
       <h1 className="title">Rick & Morty</h1><h6 className="text-grey" text-siz >Iván B. by React</h6>
       
       {characters ? (
        <Characters characters={characters} setCharacters = {setCharacters}/>
       ) : (
         <>
       <img src={imagenRick} alt="Bob-Esponja" className="img-home"/>
       <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
       </>
       )}

      </header>
    </div>
  );
}

export default App;
