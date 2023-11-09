import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))
app.set("view engine" ,"ejs")

let taskItems = [];

app.get("/",(req,res)=>{
   /* res.render("index.ejs",{
      data : taskItems
    });*/
  res.render("index.ejs")
})

app.post("/submit",(req,res)=>{
      const userInput = req.body["taskText"];
        taskItems.push(userInput)
 res.render("index.ejs",{
     data : taskItems
  });
  //res.redirect("/")
  
})
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})
