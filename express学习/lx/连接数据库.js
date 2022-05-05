const mysql =require('mysql')


const db=mysql.createPool({
    host:'47.100.101.103', //数据库的ip地址
    user:'root',           //登陆数据库的账号
    password:'86753558',   //密码
    database:'nodelx'      //指定操作哪个数据库
})


const sqlStr=`DELETE FROM users WHERE id=?`

db.query(sqlStr,2,(err,results)=>{
    if(err)return console.log(err.message)
    //如果执行的是插入语句，results是一个对象，可以通过results.affectedRows判断是否插入成功
    if(results.affectedRows ===1) console.log("删除成功")
})
