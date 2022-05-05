
const express=require('express')

const app=express()

const session = require('express-session')

app.use(session({
    secret:'pomie',
    resave:false,
    saveUninitialized:true
}))
app.use(express.json())

//登陆api接口
app.post('/api/login',(req,res)=>{
    if(req.body.username!=='admin'||req.body.password!=='000'){
        return res.send({status:1,msg:'登陆失败'})
    }
    console.log(req.body)

    //将登陆成功的用户信息保存到session中
    //只有成功配置了express-session中间件后，才能通过req点出来session这个属性
    req.session.user=req.body  //保存用户信息
    req.session.islogin=true   //保存登陆状态

    res.send({status:0,msg:'登录成功'}) 
})


//获取用户姓名的接口
app.get('/api/username',(req,res)=>{
    if(req.session.islogin){
        return res.send({status:1,msg:'fail'})
    }
    res.send({
        status:0,
        msg:'success',
        username:res.session.user.username
    })
})

//退出登陆的接口
app.post('/api/logout',(req,res)=>{
    //清空session信息
    req.session.destroy()
    res.send({
        status:0,
        msg:'退出登陆成功'
    })
})

app.listen(80,()=>{
    console.log("服务器启动成功")
})