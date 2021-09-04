var http = require('http')
var createModules = require('./createModule')

console.log('-----module dc import')
console.log(createModules)

console.log('-----module hien tai')
console.log(module)

http.createServer(function(request, response) {
    console.log('sever dang lang nghe')
    response.writeHead(200, {'content-text': 'text/html'})
    response.write('hien thi thoi gian hien tai', createModules.getMyDateTime() + '<br/>')
    response.write('duong dan file con', createModules.getDirName() + '<br />')
    response.write('ten', createModules.myAge + '<br />')
    response.end('hello')
}).listen(8080) 
