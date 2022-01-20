const express = require("express");
const { restart } = require("nodemon");
const Post = require("../models/Post");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("we are on post");
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try{
  const savedPost = await post.save();
  res.json(savedPost);
  }
  catch(err){
    res.json({message :err });
  }
});
module.exports = router;
