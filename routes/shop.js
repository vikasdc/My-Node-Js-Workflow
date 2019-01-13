const express =  require('express');
const path = require("path")
const route = express.Router()

route.get('/',(req,res,next)=> {
    const x = 'variable'
    res.render('shop',{key:x})
})

module.exports = route;