const express = require('express');
const app = express()
const bodyParser = require('body-parser');
var pug = require('pug');
const { json } = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express(json()))
const items = [
    {
        id: 0,
        name: "Sáo HD1",
        price: 1000,
        pic: "item (1).jpg"
    },
    {
        id: 1,
        name: "Sáo HD2",
        price: 1000,
        pic: "item (2).jpg"
    },
    {
        id: 2,
        name: "Sáo HD3",
        price: 1000,
        pic: "item (3).jpg"
    },
]
app.get('/', function(req, res){
	res.render('index');
})
app.post('/user-info', (req, res) => {
    const { body } = req;
    console.log(body);
    res.render("user", { body });
});
app.listen(3000)