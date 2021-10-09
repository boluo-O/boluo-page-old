// const _ajax = (method, url, data, headers={"Content-Type":'application/json'}, callback, async = true) => {
const _ajax = (method, url, data, headers, callback, async = true) => {
    let r = new XMLHttpRequest()
    r.open(method, url, async)

    // r.setRequestHeader('Content-Type', 'application/json')
    // if (headers === undefined) {
    //     r.setRequestHeader('Content-Type', 'application/json')
    // } else {
    //     Object.entries(headers).forEach(([k, v]) => {
    //         r.setRequestHeader(k, v)
    //     })
    // }

    r.onreadystatechange = () => {
        if (r.readyState === 4) {
            // console.log('r.response', r.response)
            callback(r.response)
        }
    }
    if (method === 'POST') {
        data = JSON.stringify(data)
    }
    r.send(data)
}

class Ajax {
    constructor(baseUrl) {
        this.baseUrl = baseUrl || ''
    }

    corsGet(path, callback, async = true) {
        let method = 'GET'
        let url = this.baseUrl + path
        let data = {}
        let headers = {
            'Content-Type': 'application/json',
        }
        _ajax(method, url, data, headers, callback, async)
    }

    get(path, callback) {
        let method = 'GET'
        let url = this.baseUrl + path
        let headers = {
            'Content-Type': 'application/json',
        }
        _ajax(method, url, '', headers, (r) => {
            let t = JSON.parse(r)
            callback(t)
        })
    }

    post(path, data, callback) {
        let url = this.baseUrl + path
        let headers = {
            'Content-Type': 'application/json',
        }
        _ajax('POST', url, data, headers, (r) => {
            let t = JSON.parse(r)
            callback(t)
        })
    }
}

export default Ajax