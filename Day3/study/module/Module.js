console.log(module)

//Build-in module
//path module
var path = require('path');
var fileName = path.basename('User/TestPath/demo.js')
console.log(fileName)

// os module
var os = require('os');
console.log('Platform: ', os.platform());
console.log('Architecture', os.arch())

//querystring path
var queryString = require('querystring');
var query = queryString.parse('search=oto&year=2018&module=Audi');
console.log(query)

//http module
//đẻ chay localhost:8080
var http = require('http')
http.createServer(function(request, response) {
    response.writeHead(200, {'content-text': 'text/html'})
    response.end('hello')
}).listen(8080) 

