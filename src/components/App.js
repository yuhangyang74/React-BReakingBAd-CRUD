import './App.css';
import { useState, useEffect } from 'react';
import api from '../apis/bbBaseUrl';
import CreateCharacter from './CreateCharacter';

import CharacterList from './CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getAllCharacters = async () => {
      const allCharacters = await retrieveCharacters();
      if (allCharacters) setCharacters(allCharacters);
    };

    getAllCharacters();
  }, []);

  //Retrieve character list from initial.
  const retrieveCharacters = async () => {
    const response = await api.get('/characters');

    return response.data;
  };

  return (
    <div>
      <CreateCharacter />
      <CharacterList value={characters} />
    </div>
  );
}

export default App;
