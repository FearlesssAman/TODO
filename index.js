import bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;

app.use("/Static" , express.static("Static"));

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({extended : true}));


let arr = [];
let arr2 = [];

app.get("/" , (req,res)=> {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
let days = today.toLocaleDateString("en-US", options)
  res.render("index.ejs" , {weekdayday : days , arr : arr });
})

app.get("/index" , (req,res)=> {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();
  let days = today.toLocaleDateString("en-US", options)
  res.render("index.ejs" , {weekdayday : days , arr : arr });
  })

app.get("/work" , (req,res)=> {
 
res.render("work.ejs" , { arr2 : arr2 });
})


app.post("/index" , (req,res) => {
     let newItem = req.body.newitem; 
  arr.push(newItem);
  
    res.redirect("index");
})

app.post("/work" , (req,res) => {
  let newItem2 = req.body.newitem2; 
  arr2.push(newItem2);

  res.redirect("/work");
})





app.listen(port , () => {
    console.log(`listing from port ${port}`);
})
