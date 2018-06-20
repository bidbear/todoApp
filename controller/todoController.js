let bodyParser = require("body-parser");
var unParser = bodyParser.urlencoded({extended:false,})
let data =[
  {item:"dhaskdhasdasd"},
  {item:"1eqweqweqweq"},
  {item:"dhaskdhasweqweqdasd"},
  {item:"dhaskdhase1212dasd"},
]
module.exports = function (app) {  
    //获取数据
    app.get("/todo",function (req,res) {
        res.render("todo",{
          todos:data,
        }); 
      });
    //传递数据
    app.post("/todo",unParser,function (req,res) {
       data.push(req.body);
      });
    //删除数据
    app.delete("/todo/:id",function (req,res) {
        //console.log(req.params.id);
       data= data.filter(function (items) {
         return items.item!=req.params.id;
       })
       res.json(data);
      });
}