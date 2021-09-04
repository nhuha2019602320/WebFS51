const express = require('express')
const carRouter = express.Router();
const carModel = require('../model/car.model')

// carRouter.get('/', (req, res) => {
//     res.send(car)
// })

carRouter.get('/', (req, res) => {
    carModel.find( {name: req.query.name} ).exec((err, car) => {
        if(err) {
            res.send('k lay thong tin car')
        } else {
            console.log('lay thanh cong')
            res.json(car);
        }
    })
})
carRouter.post('/', (req, res) => {
    var car = new carModel();
    car.name = req.body.name;
    car.manufacture = req.body.manufacture;
    car.price = req.body.price

    car.save((err, car) => {
        if(err) {
            res.send('err luu thong tin')
        } else {
            console.log('luu thong tin thanh cong')
            res.send(car);
        }
    });
})

carRouter.put('/:id', (req, res) => {
    carModel.findOneAndUpdate( 
        {_id: req.params.id},
        {$set: {name: req.body.name}},
        {$upset: true},
        (err, car) => {
            if(err) {
                res.send('loi r')
            } else {
                res.send('thanh cong')
            }
        }    
    )
})

carRouter.delete('/:id', (req, res) => {
    carModel.findOneAndDelete(
        {_id: req.params.id},
        (err, car) => {
            if(err) {
                res.send('loi')
            }else {
                res.send('xoa thanh cong')
            }
        })
})

module.exports = carRouter;