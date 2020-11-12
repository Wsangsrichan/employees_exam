const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeesSchema = new Schema(
    {
        firstname: String,
        lastname: String,
        birthday: Date,
        email: String
    },
    {
        versionKey: false
    }
)

const EmployeesModel = mongoose.model('employees', employeesSchema)

module.exports = EmployeesModel