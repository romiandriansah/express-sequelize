const route = require('express').Router()

route.get('/', (req, res) => {
    res.send('Hello World!')
  })

const todoRoute = require('./todo');
route.use('/todos', todoRoute)
  
// route.get('/items', (req, res) => {
//     res.send('Here for Items!')
//   })

module.exports = route