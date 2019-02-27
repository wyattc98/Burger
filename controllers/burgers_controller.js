import express from "express";

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res){
     burger.selectAll(function(data){
     var hbsObject = {
         burgers: data
     };
     res.render("index", hbsObject);
    })
});

module.exports = router;

