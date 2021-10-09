const { sendHtml } = require('../utils/utils')

const index = {
    path: '/',
    method: 'get',
    func: (request, response) => {
        let page = 'index.html'
        sendHtml(response, page)
    }
}

const routes = [
    index,
]

module.exports = routes