import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

import { CssBaseline} from '@mui/material';
import api from './services/api';
import DirectQuestionsPage from './pages/DirectQuestionsPage';
import HomePage from './pages/HomePage'
import QuestionnairePage from './pages/QuestionnairePage'
import RecommendationPage from './pages/RecommendationsPage'
import ResultsPage from './pages/ResultPage'

import { Container } from '@mui/material';

function App() {
  const [questions, setQuestions] = useState([])
  const [result, setResult] = useState(JSON.parse(localStorage.getItem('results')))
  const [tables, setTables] = useState(null)
  const [directQuestions, setDirectQuestions] = useState([])
  const [resultsDQ, setResultsDQ] = useState(JSON.parse(localStorage.getItem('resultsDQ')))
  const [recommendations, setRecommendations] = useState([])

  const THEME = createTheme({
    
    palette: {
      background: {
        default: "#d8ebff"
      }
    },
    components: {
      MuiButton: {
          styleOverrides: {
              root: {
                  border: '1px solid #ff4742',
                  background: '#b5d9ff',
                  borderRadius: 12,
                  border: 0,
                  color: 'black',
                  height: 48,
                  padding: '0 30px',
                  fontWeight: 'bold',
                  boxShadow: '1px 2px 4px rgb(0 0 0 / 10%)',
              }
          }
      },
      MuiPaper: {
        styleOverrides: {
            root: {
                background: '#fff',
            }
        }
    }
    },

   
    typography: {
      fontFamily: "QuickSand",
      h1: {
        padding: 10,
        fontWeight: "bold",
        fontSize: 48,
      },
      h2: {
        padding: 10,
        fontWeight: "bold",
        fontSize: 22,
      },
      h3: {
        padding: 10,
        fontSize: 18,
      }
    }
  })

  useEffect(() => {
    api.getQuestions()
    .then(data => {
      setQuestions(data)
    })

    api.getDirectQuestions()
    .then(data => {
      setDirectQuestions(data)
    })

    api.getTables()
    .then(data => {
      setTables(data)
    })

    api.getRecommendations()
    .then(data => {
      setRecommendations(data)
    })

    setResult(JSON.parse(localStorage.getItem('results')))
  }, [])

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(result))
    localStorage.setItem('resultsDQ', JSON.stringify(resultsDQ))
  }, [result, resultsDQ])
  

  return (
    <ThemeProvider theme={THEME}>
      <Container maxWidth="lg" maxHeight="lg">
        <Router>
          <Routes>
            <Route path="/recommendations" element={<RecommendationPage tables={tables} resultsDQ={resultsDQ} recommendations={recommendations}/>} />
            <Route path="/questionnaire2" element={<DirectQuestionsPage questions={directQuestions} setResultsDQ={setResultsDQ}/>} />
            <Route path="/results" element={<ResultsPage tables={tables} setTables={setTables} result={result}/>} />
            <Route path="/questionnaire" element={<QuestionnairePage questions={questions} tables={tables} setTables={setTables} setResult={setResult}/>} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
        <CssBaseline>

        </CssBaseline>
      </Container>
    </ThemeProvider>
  );
}

export default App;
