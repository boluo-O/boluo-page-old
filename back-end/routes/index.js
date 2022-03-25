const page = require('./page')  // 测试页面
const todo = require('./todo')

module.exports = [
    ...todo,
    ...page,
]