var express =require("express");
//自定义模块todoController
var todoController = require("./controller/todoController.js")
var app = express();
//设置模版引擎
app.set("view engine","ejs");
// 设置静态目录
app.use(express.static("./public"));
//给控制器传入app
todoController(app);
// 监听端口
app.listen(3000);