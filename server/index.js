const express = require('express') // importing o express
const mongoose = require('mongoose') // importando o mongoose
const Employee = require('./models/Employee') // importando o Schema Employee
const app = express()

app.use(
        express.urlencoded({
                extended: true,
        }),
)

app.use(express.json())

app.get('/',(req,res) =>{
        res.json({"message":"Oi Express!"});
})


mongoose
        .connect('mongodb+srv://admin:admin@employee-dashboard.x2uej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(() => {
                console.log('Conectou ao banco!')
                app.listen(3000)
        })
        .catch((err) => console.log(err))



