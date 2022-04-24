import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import api from './services/api';
import DemographicQuestionsPage from './pages/DemographicQuestionsPage';
import HomePage from './pages/HomePage'
import QuestionnairePage from './pages/QuestionnairePage'
import RecommendationPage from './pages/RecommendationsPage'
import ResultsPage from './pages/ResultPage'

function App() {
  const [questions, setQuestions] = useState([])
  const [result, setResult] = useState(["-", "-", "-"])
  const [tables, setTables] = useState(null)
  const [demoQuestions, setDemoQuestions] = useState([])
  const [resultsDQ, setResultsDQ] = useState([])
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    api.getQuestions()
    .then(data => {
      setQuestions(data)
    })

    api.getDemoQuestions()
    .then(data => {
      setDemoQuestions(data)
    })

    api.getTables()
    .then(data => {
      setTables(data)
    })

    api.getRecommendations()
    .then(data => {
      setRecommendations(data)
    })
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/recommendations" element={<RecommendationPage tables={tables} resultsDQ={resultsDQ} recommendations={recommendations}/>} />
        <Route path="/questionnaire2" element={<DemographicQuestionsPage questions={demoQuestions} setResultsDQ={setResultsDQ}/>} />
        <Route path="/results" element={<ResultsPage tables={tables} result={result}/>} />
        <Route path="/questionnaire" element={<QuestionnairePage questions={questions} tables={tables} setTables={setTables} setResult={setResult}/>} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
