const express = require('express')
const app=express()

//可以把字符串格式的请求体数据，解析成对象格式
const mv=require("./body-parser")

app.use(mv)
app.post("/user",(req,res)=>{
  
    res.send(req.body)
})



app.listen(80,()=>{
    console.log("服务器启动成功")
})