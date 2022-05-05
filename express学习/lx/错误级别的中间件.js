const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    throw new Error('服务器发生错误')
    res.send("home page") 
})

app.use((err,req,res,next)=>{
    console.log(err.message)
    res.send(err.message) 
})


app.listen(80,()=>{
    console.log('服务器启动成功')
})