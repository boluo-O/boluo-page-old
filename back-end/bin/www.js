// 引入模块
const app = require('../app')
const http = require('http')
const debug = require('debug')('rental-map:server');
// 设置端口
app.set('port', 80)

// 创建 HTTP 服务器
let server = http.createServer(app)

// 服务器监听端口
server.listen(80, '127.0.0.1', ()  => {
    console.log('address', '\x1B[34m\033[1m', `http://${server.address().address}:${server.address().port}`)
})
// 服务器监听事件
server.on('listening', () => {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
    debug('Listening on ' + bind)
})

server.on('error', () => {
    if (error.syscall !== 'listen') {
        throw error
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
})