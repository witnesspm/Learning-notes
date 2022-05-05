const express = require('express')
const app=express()

app.use("/a",express.static('./静态资源文件夹'))


app.listen(80,()=>{
    console.log("服务器启动成功")
})