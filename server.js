const express = require("express");
const app = express();

app.post("/", async (req, res) => {
  console.log("port run");
});

app.listen(5000,(req,res)=>{
    console.log("server is running");
});
