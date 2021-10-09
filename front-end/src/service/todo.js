import Ajax from '../utils/ajax'

let ajax = new Ajax()
let baseUrl = 'http://127.0.0.1:80/'

const todo = {}

todo.all = () => {
    return new Promise((resolve, reject) => {
        let path = 'api/todo/all'
        let url = baseUrl + path
        let data = []
        ajax.get(url, (res) => {
            data = [...res]
            resolve(data)
        })
    })
}

todo.add = (data) => {
    return new Promise((resolve, reject) => {
        let path = 'api/todo/add'
        let url = baseUrl + path
        ajax.post(url, data, (res) => {
            resolve(data)
        })
    })
}

todo.update = () => {
    return new Promise((resolve, reject) => {
        let path = 'api/todo/update'
        let url = baseUrl + path
        ajax.get(url, (res) => {
            resolve(res)
        })
    })
}

todo.delete = (id) => {
    return new Promise((resolve, reject) => {
        let path = `api/todo/delete?id=${id}`
        let url = baseUrl + path
        ajax.get(url, (res) => {
            resolve(res)
        })
    })
}

export default todo
