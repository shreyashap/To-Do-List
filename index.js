import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))
app.set("view engine" ,"ejs")

let taskItems = [];

app.get("/",(req,res)=>{
  res.render("index.ejs",{
      data : taskItems
    });
})

app.post("/submit",(req,res)=>{
      const userInput = req.body["taskText"];
        taskItems.push(userInput)
  res.redirect("/")
  
})
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})
