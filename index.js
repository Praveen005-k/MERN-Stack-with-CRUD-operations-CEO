const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const UserModel = require('./models/Registration')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/praveen")

app.post('/createuser', (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => rse.json(err))
})


app.get('/getuser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})




app.put('/updateuser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id },
        {
            firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email,
            password: req.body.password, dataOfBirth: req.body.dataofbirth, gender: req.body.gender,
            mobile: req.body.mobile, address: req.body.address, technology: req.body.technology, shifts: req.body.shifts
        })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/deleteuser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.listen(5000, () => {
    console.log('5000 server running');

})