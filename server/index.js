// importando o necessario para rodar o express 

const express = require('express')
const app = express()
app.use(express.json())
const port = 5000

//importando o necessario para conectar copm o bd

const mongo = require('mongodb').MongoClient
const url = "mongodb://localhost:27017"


// conexao com bd

let db,users

mongo.connect(url,
        {
                useNewUrlParser: true,
                useUnifiedTopology: true,
        },
        (err,client) =>{
                if (err){
                        console.error(err)
                        return
                }
                db = client.db('employee-dashboard')
                users = db.collection('employee')
        }
        )


//endpoints

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/user', (req,res) =>{
        const name = req.body.name
        const password = req.body.password
        users.insertOne({name: name, password: password}, (err,result) =>{
                if (err){
                        console.error(err)
                        console.status(500).json({err:err})
                        return
                }
                console.log(result)
                res.status(200).json({ok:true})
        })

})

app.get('/employee', (req,res) =>{
        
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})