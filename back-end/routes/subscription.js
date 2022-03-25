// const todo = require('../modal/todo')
// const { bodyParse } = require('../utils/utils')

const allSubscription = {
    path: '/api/subscription',
    method: 'get',
    func: (request, response) => {

    }
}

const addTodo = {
    path: '/api/todo/add',
    method: 'post',
    func: (request, response) => {

    }
}

const updateTodo = {
    path: '/api/subscription',
    method: 'put',
    func: (request, response) => {

    }
}

const deleteTodo = {
    path: '/api/subscription',
    method: 'delete',
    func: (request, response) => {

    }
}

const routes = [
    allTodo,
    addTodo,
    updateTodo,
    deleteTodo,
]

module.exports = routes