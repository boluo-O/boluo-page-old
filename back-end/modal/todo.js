const { response } = require('express')
const fs = require('fs')
const { uuid } = require('../utils/utils')
const todo = {}
const readDB = (dbPath) => {
    let options = {
        encoding: 'utf-8'
    }
    let data = fs.readFileSync(dbPath, options)
    data = JSON.parse(data)
    return data
}

const writeDB = (dataList, dbPath) => {
    let data = JSON.stringify(dataList, null, 2)
    fs.writeFileSync(dbPath, data)
}

const handleStandardRes = (data) => {
    let res = {}
    if (typeof (data) === 'string') {
        res.message = data
        res = JSON.stringify(res)
    } else if (Array.isArray(data)) {
        res = JSON.stringify(data)
    } else {
        res = JSON.stringify(res)
    }

    return res
}

todo.dataPath = 'db/todo.json'

todo.all = () => {
    let todoList = readDB(todo.dataPath)
    const _todoList = [
        ...todoList.filter(item => item.type === '01'),
        ...todoList.filter(item => item.type === '02'),
        ...todoList.filter(item => item.type === '03'),
        ...todoList.filter(item => item.type === '04'),
        ...todoList.filter(item => item.type === '05'),
    ]

    let res = handleStandardRes(_todoList)
    return res
}

todo.add = (todoInfo) => {
    let res = handleStandardRes('添加成功')
    let path = todo.dataPath
    let todoList = readDB(path)

    const todoItem = {
        id: uuid(),
        type: todoInfo.type,
        content: todoInfo.content,
        completed: false,
        createTime: new Date().getTime(),
    }
    todoList.push(todoItem)
    writeDB(todoList, path)
    return res
}

todo.update = (todoItem) => {
    let path = todo.dataPath
    let todoList = readDB(path)
    let res = handleStandardRes('修改失败 未找到该todo')

    // 根据id替换对应todo 的属性值
    todoList.forEach(item => {
        if (item.id === todoItem.id) {
            for (const key in todoItem) {
                if (Object.hasOwnProperty.call(item, key)) {
                    item[key] = todoItem[key]
                }
            }
            writeDB(todoList, path)
            res = handleStandardRes('修改成功')
            return
        }
    })
    return res
}

todo.delete = (id) => {
    let path = todo.dataPath
    let todoList = readDB(path)
    let res = handleStandardRes('删除成功')

    for (let i = 0; i < todoList.length; i++) {
        let todoItem = todoList[i]
        if (todoItem.id === id) {
            todoList.splice(i, 1)
            writeDB(todoList, path)
            return res
        }
    }
    res = handleStandardRes('删除失败 未找到该todo')
    return res
}

module.exports = todo