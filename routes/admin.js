const express = require('express');
const path = require("path")
const fs = require("fs")

const router = express.Router()

router.get('/product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

router.post('/product',(req,res,next)=>{
    const body = req.body;
    console.log(body)
    var notes = [];
    let productInfo = {
        'product':body.product,
        'price': body.price,
        'name':body.name
    };
    notes.push(productInfo)
     fs.writeFile('data.json',JSON.stringify(notes),err=>{
        res.redirect('/admin/data')
     })
    
})
router.get('/viewdata',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'viewdata.html'))
})

router.post('/viewdata',(req,res,next)=>{
    const body = req.body;
    var product = fs.readFileSync('data.json').toString();
    var productInfo = JSON.parse(product);
    var dup = productInfo.filter((product)=>product.name === body.name)
  
    

})

router.use('/data',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','data.html'))
})
// router.use('/p1',(req,res,next) =>{
//     console.log("i will be redirected")
//     setTimeout(() => {  
//         var x = 1
//         var z = setInterval(()=>{
//             x++;
//             if(x === 500){
                
//                 clearInterval(z)
//             }
//             console.log(x)
            
//         },10)
//         res.redirect('/admin/message')
//     }, 1000);
// })

module.exports = router;