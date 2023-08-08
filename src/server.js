const express = require("express")
const app = express()
require("dotenv").config()
const bodyparser = require("body-parser")
const cors = require("cors")
const fileupload = require("express-fileupload")

const {routes} = require("./routes/route")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(fileupload())
app.use(cors({
    "access-control-allow-origin": "*"
}));

app.use(bodyparser.json());
app.use("/api",routes);

const Port = process.env.PORT || 3000

app.get("*", (_,res) =>{
return res.status(404).json({ message:"Not Found"})
}) 
   
app.listen(Port, () =>{
    console.log(`Server is running at ${Port}`);
}) 