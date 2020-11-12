const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Employees = require('./models/employees')

//const basicAuth = require('.htaccess')
//const bodyParser = require('body-parser')

//app.use(bodyParser.urlencoded({ extended: false}))
//app.use(bodyParser.json())


//app.use(basicAuth)

// test data
/*const employees = [
    {
        "_id": "5e2e9dd0880bdf2d751b51c8",
        "firstname": "Hattie",
        "lastname": "Schamberger",
        "birthday": "1987-11-22",
        "email": "Carol41@yahoo.com"
    }
] 
*/


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

app.get('/employees/:id', (req, res) => {
    res.json({ message: 'test employees/:id'})
 })

 app.post('/employees', async (req, res) => {
    //res.json({ message: 'post employees'})
    const payload = req.body
    const employees = new Employees(payload)
    await employees.save()
    res.status(201).end()
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

