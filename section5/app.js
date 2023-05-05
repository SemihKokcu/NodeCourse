const express = require('express')

const app = express();

app.use((req,res,next)=>{
     console.log("in the middleware!")
     res.send('<h1>Hello</h1>')
     next();
})

app.use((req,res,next)=>{
    console.log("in another middleware!")
    next();
})

app.listen(3000)