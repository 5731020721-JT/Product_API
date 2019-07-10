const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})


const product = require('./db')

app.get('/Product', (req, res) => {
  res.json(product)
})


app.get('/Product/:id', (req, res) => {
    res.json(product.find(product => product.id === req.params.item_code))
  })