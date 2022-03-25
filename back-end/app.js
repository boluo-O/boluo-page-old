const { response } = require('express')
const express = require('express')
const path = require('path')

const app = express()

// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')))


// 解决跨域
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "content-type")
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
    if (req.method.toLowerCase() == 'options') {
        res.send(200)
    }
    next()
})

// 注册路由
const registerRoutes = (app, routes) => {
    routes.forEach(route => {
        app[route.method](route.path, route.func)
    })
}
const routesAll = require('./routes')
registerRoutes(app, routesAll)

module.exports = app
