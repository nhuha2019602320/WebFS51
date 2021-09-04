const express = require('express')
const app = express()

//create middle
var checkRequest = (req, res, next) => {
    //check data
    if(req.url === '/admin') {
        res.send('khong co quen');
    } else {
        next();
    }
}
//use
app.use(checkRequest);

app.get('/', (req, res) => {
    res.send('truy cap home thanh cong')
});

app.get('/shopping-cart', (req, res) => {
    res.send('thanh cong shop')
})
app.get('/admin', (req, res) => {
    res.send('truy cap admin thanh cong')
});

app.listen(3003)