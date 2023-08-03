const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = ["buy food", "cook food", "eat food"];
var workItems = [];

app.get("/", function(req,res){
    let day = date.getdate();
    res.render("list",{ListTitle: day, newListItems: items}); 
})

 app.post("/", function(req,res){
    
    let check = (req.body.list);

    if(check==="Work List"){
    var workI = req.body.newItem;
    workItems.push(workI);  
    res.redirect("/work");

    }
    else{
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
    }
 })
app.get("/work" , function(req,res){
    res.render("list",{ListTitle: "Work List", newListItems: workItems});
})
app.get("/about", function(req,res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("server is running at port 3000");
})