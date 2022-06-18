import Ajax from '@Utils/ajax'

let ajax = new Ajax()
let baseUrl = 'http://127.0.0.1:80/api/'

const createAPI = (name, options) => {
    const result = {}
    for (let key in options) {
        const { method, path } = options[key]
        result[key] = (params) => {
            return new Promise((resolve, reject) => {
                const url = baseUrl + path
                if (method.toLowerCase() === 'get') {
                    ajax.get(url, (res) => {
                        resolve(res)
                    })

                } else if (method.toLowerCase() === 'post') {
                    ajax.post(url, params, (res) => {
                        resolve(res)
                    })
                }

            })
        }
    }
    return result
}

export default createAPI