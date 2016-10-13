const pug = require('pug')
const path = require('path')

const vueRender = require('vue-ssr')
// const vueRender = require('../vue-ssr/renderer')

const serverConfig = require('../../build/webpack.server')

const indexRenderer = vueRender({
    projectName: 'index', 
    rendererOptions: {
        cache: require('lru-cache')({
            max: 10240,
            maxAge: 1000 * 60 * 15
        })
    }, 
    webpackServer: serverConfig
})

function render (view, data) {
    return pug.compileFile(path.join(__dirname, '../views/' + view + '.pug'), {
        cache: true
    })(data)
}

function index (req, res) {
    const template = render('index', { title: 'cov-x', bundle: 'index' })
    indexRenderer(req, res, template)
}

module.exports = {
    index
}