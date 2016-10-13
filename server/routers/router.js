const express = require('express')
const router = express.Router()

const View = require('./view')

router.get('/', View.index)
router.get('/home', View.index)
router.get('/article', View.index)
router.get('/tag', View.index)

router.get('/login', function (req, res) {
  res.render('login', { title: 'login', bundle: 'login'})
})

module.exports = router