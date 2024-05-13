const express = require ("express")
const app = express ()

app.get("/", (req, res) =>{
  res.send("This is my first api endpoint")
})

app.listen(3000, ()=>{
  console.log ("Node API application is running on port 3000")
})