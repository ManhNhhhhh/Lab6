const express = require("express");
const app = express();
const path = require("path");

//set thư mục chứa view
app.set("views", path.join(__dirname, "/views"));
//set view engine (template engine)
app.set("view engine","hbs");

//render ra trang chủ (index.hbs
//get: get method
app.get("/",(req , res)=>{
    res.render("index");
});

//chạy web server   
app.listen(port,()=> {
    console.log("server is not running at: ")
})