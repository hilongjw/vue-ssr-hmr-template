const express = require('express')
const router = express.Router()

router.get('/user/:id', function (req, res) {
  res.send('OK 233')
})

router.get('/', function (req, res) {
  res.render('index');
})

router.get('/login', function (req, res) {
  res.render('login');
})

module.exports = router