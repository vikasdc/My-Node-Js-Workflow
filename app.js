const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')
const notfound = require('./routes/notfound')
app.use(bodyParser.urlencoded({"extended":false}))

app.set('view engine', 'pug')
app.set('views','views')

app.use('/',(req,res,next) => {
    next()
})

app.use('/admin', adminRoute)
app.use(shopRoute)
app.use(notfound)



app.listen(8000)