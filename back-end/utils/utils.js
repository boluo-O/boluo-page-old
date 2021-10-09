const { response } = require("express")
const fs = require('fs')

const sendHtml = (response, pageName) => {
    let options = {
        encoding: 'utf-8',
    }
    let path = 'views/' + pageName
    fs.readFile(path, options, (error, data) => {
        response.send(data)
    })
}
// 仅支持JSON 数据 TODO完善
const bodyParse = async (request) => {
    let data = []
    await request.on('data', (chunk) => {
        let strData = chunk.toString('utf-8')
        data = JSON.parse(strData)
        if (typeof(data) === 'string') {
            data = JSON.parse(data)
        }
    })
    return data
}

module.exports = { 
    sendHtml,
    bodyParse
}