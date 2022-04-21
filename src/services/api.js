import axios from 'axios';

const baseURL = "http://localhost:3001/api"

const getQuestions = () => {
    return axios.get(baseURL + "/questions")
            .then(response => {
                return response.data
            })
}

const getResults = (result) => {
    return axios.get(baseURL + "/results/" + result)
            .then(response => {
                return response.data
            })
}

const getRecommendations = () => {
    return axios.get(baseURL + "/recommendations")
            .then(response => {
                return response.data
            })
}

const api = {
    getQuestions,
    getResults,
    getRecommendations
}

export default api