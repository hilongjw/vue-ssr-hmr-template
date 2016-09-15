const path = require('path')
const fs = require('fs')
const projectDir = path.resolve(__dirname, '../client/')

let except = ['.DS_Store']

module.exports = function (webpackHotMiddlewareConfig, exceptList) {
    except = except.concat(exceptList)
    let entries = {}
    let floders = fs.readdirSync(projectDir)
    floders.forEach(floder => {
        if (except.indexOf(floder) === -1) {
            if (webpackHotMiddlewareConfig) {
                entries[floder] = [webpackHotMiddlewareConfig, './client/' + floder + '/main.js']
            } else {
                entries[floder] = ['./client/' + floder + '/main.js']
            }
        }
    })
    return entries
}
