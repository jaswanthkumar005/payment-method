const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept,Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS, PUT")
  next();
});
app.post("/api/posts",(req,res,next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message:"Payment Done successfully!",
    credit: post
  })

});

module.exports = app;
