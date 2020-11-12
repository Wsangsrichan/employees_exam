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
 

app.listen(9000, () => {
    console.log('Application is running on port 9000')
})

