const { response } = require('express')
// const webcrypto1 = require('crypto-js')
const webcrypto = require('crypto').webcrypto
// console.log('webcrypto1', webcrypto1)
// console.log('webcrypto2', webcrypto2)
// const CryptoJS = require('crypto-js')
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
        if (typeof (data) === 'string') {
            data = JSON.parse(data)
        }
    })
    return data
}

const uuid = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ webcrypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

module.exports = {
    sendHtml,
    bodyParse,
    uuid,
}