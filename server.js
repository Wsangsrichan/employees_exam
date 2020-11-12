const { Router } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Employees = require('./models/employees')

// basic authen
var http = require('http')
var auth = require('http-auth')
const { Http2ServerRequest } = require('http2')
var basic = auth.basic({
    realm: "employees",
    file: __dirname + "/user.htpasswd"
})



// connect mongodb
mongoose.connect('mongodb://localhost:27017/employees_exam', {
     useNewUrlParser: true
})


app.use(express.json())
const employees = [{}]


app.get('/employees', async (req, res) => {
   const employees = await Employees.find({})
   res.json(employees)
})

app.get('/employees/:id', async (req, res) => {
    const { id } = req.params
    const employees = await Employees.findById(id)
    res.json(employees)

 })

 app.post('/employees', async (req, res) => {
    const payload = req.body
    const employees = new Employees(payload)
    await employees.save()
    res.status(201).end()
 })


 app.put('/employees/:id', async (req, res) => {
    const payload = req.body
    const { id } = req.params
    const employees = await Employees.findByIdAndUpdate(id, { $set: payload })
    res.json(employees)
 })

 app.delete('/employees/:id', async (req, res) => {
    const { id } = req.params

    await Employees.findByIdAndDelete(id)
    res.status(204).end()
 })
 

app.listen(9000, basic ,() => {
    console.log('Application is running on port 9000')
})

/*
http.createServer( 
    basic.check((req, res) => {
        res.end('welcome')
    })
    )
    
    .listen(9000,() => {
        console.log("server running at http://127.0.0.1:9000")
    })   
*/