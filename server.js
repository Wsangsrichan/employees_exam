const express = require('express')
const app = express()
c
//const basicAuth = require('.htaccess')
//const bodyParser = require('body-parser')

//app.use(bodyParser.urlencoded({ extended: false}))
//app.use(bodyParser.json())


//app.use(basicAuth)
app.use(express.json())

app.get('/employees', (req, res) => {
   res.json({ message: ' test get employees'})
})

app.get('/employees/:id', (req, res) => {
    res.json({ message: 'test employees/:id'})
 })

 app.post('/employees', (req, res) => {
    res.json({ message: 'post employees'})
 })

 app.put('/employees/:id', (req, res) => {
    res.json({ message: 'put employees'})
 })

 app.delete('/employees/:id', (req, res) => {
    res.json({ message: 'delete employees'})
 })
 

app.listen(9000, () => {
    console.log('Application is running on port 9000')
})

