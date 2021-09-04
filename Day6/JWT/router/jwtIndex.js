const express = require('express')
const router = express.Router()
const Joi = require('joi')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model')

function registerValidate(data) {
    const schema = Joi.object({
        name:Joi.string().min(4).required(),
        email:Joi.string().email().min(4).required(),
        password:Joi.string().min(6).required()
    })
    return schema.validate(data)
}

function loginValidate(data) {
    const schema = Joi.object({
        email:Joi.string().email().min(4).required(),
        password:Joi.string().min(6).required()
    })
    return schema.validate(data)
}
//todo- add code handle logic

router.post('/register', async (req, res) => {
    // 1.validation user info
    const { error } = registerValidate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    // 2.check email exist in db
    const email = await userModel.findOne( {email: req.body.email} )
    if(email) {
       return res.send('email ton tai')
    }
    // 3.bcryptjs for crypt password
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(req.body.password, salt);
    // 4. create new user.
    const newUser = new userModel();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = hashPassword
    // 5. return user for client
    try {
        const user = await newUser.save()
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})

router.post('/login', async (req, res) => {
    const { error } = loginValidate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const user = await userModel.findOne({email: req.body.email})
    if(!user) return res.send('khong ton tai email')

    const passwordLogin = await bcrypt.compareSync(req.body.password, user.password);
    if (!passwordLogin) res.status(400).send('Password incorrect');

    const token = jwt.sign({ id: user._id }, 'chuoibimatkhongtietlo');

    res.header('auth-token', token).send(token);

})

const middlewareVerify = (req, res, next) => {
    const token = req.header('auth-token');
    console.log('Token from client: ', token);
    if (!token) return res.status(401).send('Forbidden !!!');
    try {
        // check token correct
        req.user = jwt.verify(token, 'chuoibimatkhongtietlo');
        next();
    } catch (e) {
        res.status(400).send('Token incorrect')
    }
}

router.get('/admin', middlewareVerify, function (req, res) {
    res.send('Hello world, you access with token OK !');
})

module.exports = router;