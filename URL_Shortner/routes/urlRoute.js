const express = require('express')
const {handelNewShortUrl, handelAnalytics} = require('../controller/urlController')


const urlroute = express.Router()


urlroute
.post('/', handelNewShortUrl)
.get('/analytics/:shortId', handelAnalytics)

module.exports = urlroute