const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const UserModel = require('../model/use.model');

function registerValidate(data) {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(6).required(),        
    })
    return schema.validate(data);
}
function loginValidate(data) {
    const schema = Joi.object({
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
}

router.post('/register', async (req, res) => {
    const { error } = registerValidate(req.body)
    if(error) {
        res.send(error.details[0].message);
    }

    const existEmail = await UserModel.findOne({email: req.body.email})
    if(existEmail) {
        res.send('exist Email!')
    }

    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(req.body.password, salt);

    var newUser = new UserModel()
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = hashPassword;

    try {
        const user = await newUser.save();
        res.send(user)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/login', async (req, res) => {
    const { error } = loginValidate(req.body)

    const user = await UserModel.findOne({email: req.body.email})
    if(!user) return res.send('khong ton tai email in database')

    const passwordLogin = await bcrypt.compareSync(req.body.password, user.password);
    if (!passwordLogin) res.status(400).send('Password incorrect');

    const token = jwt.sign({ id: user._id }, 'chuoibimat');

    return res.json({'token': token})
    // res.header('auth-token', token).send(token)
})

const middlewareVerify = (req, res, next) => {
    const token = req.header('auth-token');
    console.log('Token from client: ', token);
    if (!token) return res.status(401).send('Forbidden !!!');
    try {
        // check token correct
        req.user = jwt.verify(token, 'chuoibimat');
        next();
    } catch (e) {
        res.status(400).send('Token incorrect')
    }
}

router.get('/admin', middlewareVerify, function (req, res) {
    res.send('Hello world, you access with token OK !');
})
module.exports = router;