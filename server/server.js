const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')

var corsOptions = {
    origin: "*",
}

app.use(express.json())
app.use(cors(corsOptions))

let fileData = fs.readFileSync('server/questions.json')
let questions = JSON.parse(fileData)

fileData = fs.readFileSync('server/results.json')
let results = JSON.parse(fileData)

fileData = fs.readFileSync('server/recommendations.json')
let recommendations = JSON.parse(fileData)


app.get('/api/questions', (request, response) => {
    response.send(questions)
})

app.get('/api/results', (request, response) => {
    response.send(results)
})

app.get('/api/recommendations', (request, response) => {
    response.send(recommendations)
})

const PORT = 3001
app.listen(PORT, () => (console.log('Server running on 3001')))