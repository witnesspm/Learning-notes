
const express=require('express')

const app=express()

 app.use(express.json())
 app.use(express.urlencoded({extended:false}))
//挂载路由
app.get('/user',(req,res)=>{
    res.send('ok')
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})

app.post('/user',(req,res)=>{
    console.log(req.body)

    res.send("ok")
})

app.listen(80,()=>{
    console.log("服务器启动成功")
})