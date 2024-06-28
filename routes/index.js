const route = require('express').Router()

route.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
route.get('/todos', (req, res) => {
    res.send('Here we are!')
  })

module.exports = route