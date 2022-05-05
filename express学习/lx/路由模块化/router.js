//这是路由模块
//导入express
const express =require("express")
//创建路由对象
const router = express.Router()
//挂在具体的路由
router.get("/",(req,res)=>{
    res.send("get路由")
})

//向外导出路由对象
module.exports=router