const express = require('express')
const app = express();
const mongoose = require('mongoose');
// const carModel = require('./model/car.model');
const carRouter = require('./router/carRouter')
const validateUser = require('./router/validateUser')
//connect to mongodb

const db = 'mongodb://localhost/car-ex2';
const port = 3002

mongoose.connect(db)

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/car', carRouter)
app.use('/user', validateUser);
app.listen(port, () => {
    console.log('sever is running on: ', port)
})
// app.get('/', (req, res) => {
//     res.send('api working')
// })

// app.get('/car', (req, res) => {
//     carModel.find( {name: req.query.name} ).exec((err, car) => {
//         if(err) {
//             res.send('k lay thong tin car')
//         } else {
//             console.log('lay thanh cong')
//             res.json(car);
//         }
//     })
// })
// app.post('/car', (req, res) => {
//     var car = new carModel();
//     car.name = req.body.name;
//     car.manufacture = req.body.manufacture;
//     car.price = req.body.price

//     car.save((err, car) => {
//         if(err) {
//             res.send('err luu thong tin')
//         } else {
//             console.log('luu thong tin thanh cong')
//             res.send(car);
//         }
//     });
// })

// app.put('/car/:id', (req, res) => {
//     carModel.findOneAndUpdate( {_id: req.params.id},
//         {$set: {name: req.body.name}},
//         {$upset: true},
//         (err, car) => {
//             if(err) {
//                 res.send('loi r')
//             } else {
//                 res.send('thanh cong')
//             }
//         }    
//     )
// })

// app.delete('/car/:id', (req, res) => {
//     const id = {_id: req.params.id};
//     carModel.findOneAndDelete(id, (err, car) => {
//         if(err) {
//             res.send('loi')
//         }else {
//             res.json({ mess: `Successful delete id: ${req.params.id}` });
//         }
//     })
// })