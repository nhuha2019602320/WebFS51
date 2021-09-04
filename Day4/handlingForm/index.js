const express = require('express')
const app = express();
var pug = require('pug');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true }))
app.set('views', './view')//quy dinh 2 giao dien dc su dung
app.set('view engine', 'pug')//quy dinh template engine la pug

app.get('/', (req, res) => {
    res.render('form')
})

app.post('/', (req, res) => {
    const { body } = req;
    console.log(body)
    res.render("user", { body });
})
app.listen(3000)
