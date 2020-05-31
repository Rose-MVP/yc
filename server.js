// express是提供web服务器
let express = require("express");
let students = require("./controllers/students")
let app = express();

app.set("view engine","ejs")
app.get("/",students.showStudentList)

app.listen(3000,()=>{
    console.log("服务器启动了~")
})

























