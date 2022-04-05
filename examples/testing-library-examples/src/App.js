import { useState } from 'react';

import { getMeaning } from './services/dictionary';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [wordMeaning, setWordMeaning] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setWordMeaning('')
      setErrorMsg('')

      const { word } = e.target.elements;
      const response = await getMeaning({ word: word.value });

      setWordMeaning(response.data[0].meanings[0].definitions[0].definition);
    } catch (error) {
      if (error.message.includes('404')) {
        setErrorMsg('Word not found 😞 try another word');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="App">

     <h1>Free Dictionary</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="word">Word: </label>
        <input type="text" name="word" id="word" placeholder="Enter a word ..." />

        <button type="submit" disabled={isLoading}>
          Search
        </button>
      </form>

      {isLoading && <p>Loading...</p>}

      {!isLoading && wordMeaning && <p>{wordMeaning}</p>}

      {!isLoading && !wordMeaning && !errorMsg && <p>Enter a word to search</p>}

      {!isLoading && errorMsg && <p>{errorMsg}</p>}

    </div>
  );
}

export default App;
