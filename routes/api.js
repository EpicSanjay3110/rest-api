const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ninja = require('../models/ninjamod');
const mongoose = require('mongoose');

//get list
router.get('/ninja',function(req , res){
  res.send({type:'GET'});
});

//add new
router.post('/ninja',function(req , res, next){
  ninja.create(req.body).then(function(ninja){
      res.send(ninja);
  }).catch(next);

});

//update
router.put('/ninja/:id',function(req , res){
  res.send({type:'PUT'});
});

router.delete('/ninja/:id',function(req , res){
  res.send({type:'DELETE'});
});

module.exports = router;
