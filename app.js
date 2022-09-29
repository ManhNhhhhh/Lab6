const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT||3000;

//set thư mục chứa view
app.set("views", path.join(__dirname, "/views"));
//set view engine (template engine)
app.set("view engine","hbs");

//render ra trang chủ (index.hbs
//get: get method
app.get("/",(req , res)=>{
    let name = "Greenwich university";
    let address = "so 2 Pham Van Bach";
    res.render("index", { n: name, a: address});
});

//chạy web server   
app.listen(port,()=> {
    console.log("server is not running at: ")
})