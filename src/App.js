import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import api from './services/api';
import HomePage from './pages/HomePage'
import QuestionnairePage from './pages/QuestionnairePage'
import ResultsPage from './pages/ResultPage'
import RecommendationPage from './pages/RecommendationsPage'
import DemographicQuestionsPage from './pages/DemographicQuestionsPage';

function App() {
  const [questions, setQuestions] = useState([])
  const [tables, setTables] = useState(null)
  const [result, setResult] = useState(["-", "-", "-"])

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

    api.getTables()
    .then(data => {
      setTables(data)
    })
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/recommendations" element={<RecommendationPage tables={tables}/>} />
        <Route path="/questionnaire2" element={<DemographicQuestionsPage questions={questions}/>} />
        <Route path="/results" element={<ResultsPage tables={tables} result={result}/>} />
        <Route path="/questionnaire" element={<QuestionnairePage questions={questions} tables={tables} setTables={setTables} setResult={setResult}/>} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
