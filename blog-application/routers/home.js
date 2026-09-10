const {Router} = require('express');
const { handelHomepage } = require('../controller/handelHomepage.js');

const route = Router();

route.get('/', handelHomepage)


module.exports  = route