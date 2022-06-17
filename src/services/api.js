import axios from 'axios';

const baseURL = "http://localhost:3001/api"

// Retrieve DASS-21 questions
const getQuestions = () => {
    return axios.get(baseURL + "/questions")
            .then(response => {
                return response.data
            })
}

// Retrieve direct questions
const getDirectQuestions = () => {
    return axios.get(baseURL + "/directquestions")
            .then(response => {
                return response.data
            })
}

// Retrieve table information for all tables
const getTables = () => {
    return axios.get(baseURL + "/tables")
            .then(response => {
                return response.data
            })
}

// Retrieve a list of all services
const getRecommendations = () => {
    return axios.get(baseURL + "/recommendations")
            .then(response => {
                return response.data
            })
}

const api = {
    getQuestions,
    getDirectQuestions,
    getRecommendations,
    getTables
}

export default api