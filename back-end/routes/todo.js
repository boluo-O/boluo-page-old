const todo = require('../modal/todo')
const { bodyParse } = require('../utils/utils')

const allTodo = {
    path: '/api/todo/all',
    method: 'get',
    func: (request, response) => {
        let data = todo.all()
        response.send(data)
    }
}

const addTodo = {
    path: '/api/todo/add',
    method: 'post',
    func: async (request, response) => {
        let dataList = await bodyParse(request)
        let res = todo.add(dataList)
        response.send(res)
    }
}

const updateTodo = {
    path: '/api/todo/update',
    method: 'post',
    func: async (request, response) => {
        let dataList = await bodyParse(request)
        let res = todo.update(dataList)
        response.send(res)
    }
}

const deleteTodo = {
    path: '/api/todo/delete',
    method: 'get',
    func: (request, response) => {
        let id = Number(request.query.id)
        let res = todo.delete(id)
        response.send(res)
    }
}

const routes = [
    allTodo,
    addTodo,
    updateTodo,
    deleteTodo,
]

module.exports = routes