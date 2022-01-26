const express = require('express')
const app = express()

const { info, start, end, move } = require('./logic')

const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send(info())
})

app.post('/start', (req, res) => {
    res.send(start(req.body))
})

app.post('/move', (req, res) => {
    res.send(move(req.body))
})

app.post('/end', (req, res) => {
    res.send(end(req.body))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})