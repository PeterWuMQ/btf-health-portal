import axios from 'axios';

const baseURL = "http://localhost:3001/api"

const getQuestions = () => {
    return axios.get(baseURL + "/questions")
            .then(response => {
                return response.data
            })
}

const getDemoQuestions = () => {
    return axios.get(baseURL + "/demoquestions")
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

const getTables = () => {
    return axios.get(baseURL + "/tables")
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
    getDemoQuestions,
    getResults,
    getRecommendations,
    getTables
}

export default api