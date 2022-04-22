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
  const [result, setResult] = useState([0, 0, 0])

  const getResult = () => {
    api.getResult()
    .then(data => {
      result = data
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

  useEffect(() => {
    console.log(result)
  }, [result])

  return (
    <Router>
      <Routes>
        <Route path="/recommendations" element={<RecommendationPage/>} />
        <Route path="/questionnaire2" element={<DemographicQuestionsPage questions={questions}/>} />
        <Route path="/results" element={<ResultsPage result={result}/>} />
        <Route path="/questionnaire" element={<QuestionnairePage questions={questions} setResult={setResult}/>} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
