import { useEffect, useState } from 'react';
import './App.css';

import api from './services/api';

function App() {
  const [questions, setQuestions] = useState([])

  const getResult = () => {
    api.getResult()
    .then(data => {
      const result = data
    })
  }

  const getRecommendation = () => {
    api.getRecommendations()
    .then(data => {
      const recommendation = data
    })
  }

  useEffect(() => {
    api.getQuestions()
    .then(data => {
      setQuestions(data)
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
