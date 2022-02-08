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

app.post('/employee', async (req,res) =>{ // posts a new employee
        const {name,email,phone} = req.body

        const employee ={
                name,
                email,
                phone
        }
        try {
                await Employee.create(employee)
                res.status(201).json({message: 'Employee sucessfully inserted'})
        } catch(error){
                res.send(500).json({error: error})
        }
})

app.get('/employees', async (req,res) => { // get all employees
        try{
                const employee = await Employee.find()
                res.status(200).json(employee)
        } catch (error){
                res.status(500).json({error: error})
        }
})

app.get('/employee/:id', async (req,res) =>{ // get employee by id
        const id = req.params.id 

        try {
                const employee = await Employee.findOne({_id: id})
                
                if (!employee){
                        res.status(422).json({message: 'Employee has not been found!'})
                        return
                }
                res.status(200).json(employee)
        } catch(error){
                res.status(500).json({error: error})
        }
})

app.patch('/employee/:id', async (req,res) =>{ // patches an employee by id
        const id = req.params.id

        const {name,email,phone} = req.body 

        const employee = {
                name,
                email,
                phone
        }

        try{
                const updatedEmployee = await Employee.updateOne({_id: id}, employee)

                if (updatedEmployee.matchedCount === 0){
                        res.status(422).json({message: `Employee hasn't been found`})
                        return 
                }

                res.status(200).json(employee)
        } catch (error){
                res.send(500).json({error: error})
        }
})

app.delete('/employee/:id', async (req,res) => {
        const id = req.params.id 

        const employee = await Employee.findOne({_id: id})

        if (!employee){
                res.status(422).json({message: `User hasn't been found`})
                return 
        }
        try {
                await Employee.deleteOne({_id: id })
                res.status(200).json({message: 'Employee has been removed with sucess'})
        } catch (error) {
                res.status(500).json({error: error})
        }
})

mongoose
        .connect('mongodb+srv://admin:admin@employee-dashboard.x2uej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(() => {
                console.log('Conectou ao banco!')
                app.listen(3000)
        })
        .catch((err) => console.log(err))



