let db = require("../models/db")
// showStudentList  是控制器 用来渲染一个学生列表的页面
exports.showStudentList = (req,res)=>{
    db.getStudents(function(arr){
        res.render("index",{"arr":arr})
    })
}