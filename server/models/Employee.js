const mongoose = require('mongoose')

const Employee = mongoose.model('Employee',{
    name: String,
    email: String,
    phone: String,
})

module.exports = Employee