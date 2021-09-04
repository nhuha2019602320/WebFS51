const express = require('express')
const app = new express()
const ejs = require('ejs')
const { response } = require('express')
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(3000, ()=> {
    console.log("app listing")
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/post', (req, res) => {
    res.render('post')
})