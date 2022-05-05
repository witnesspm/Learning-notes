const express = require('express')
const app=express()

const mv=(req,res,next)=>{
    console.log('这是简单的中间件函数')
    req.Time=Date.now()
    next()
}

app.use(mv)
app.get("/",(req,res)=>{
    
    const a={
        a:req.Time
    }
    

    res.send(a)
})



app.listen(80,()=>{
    console.log("服务器启动成功")
})