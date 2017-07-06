  const express = require('express');
  const routes = require('./routes/api');
  const bodyParser =require('body-parser');
    //app setup
  const app = express();

  //connect to mongo
  const mongoose = require('mongoose');
  mongoose.Promise = require('bluebird');

  var mongoConfig={
  MONGOOSE_DEBUG: true,
  db: 'mongodb://admin:1234@ds131492.mlab.com:31492/starwars'
   console.log("dsdd");
  };


////mongodb://admin:1234@ds131492.mlab.com:31492/starwars   mongodb://127.0.0.1:27017/ninja'
  console.log(mongoConfig.db);
  // mongoose.connect(mongoConfig.db, { server: { socketOptions: { keepAlive: 1 } } });
  //server: { socketOptions: { keepAlive:1, socketTimeoutMS: 0} }

  mongoose.connect(mongoConfig.db, {server:{ socketOptions: { keepAlive:1} }}, function(error) {
  if(error)
  console.log(error);
  else
  console.log("MongooDb Got Connected");
  // Check error in initial connection. There is no 2nd param to the callback.
  })
  mongoose.connection.on('error',function() {
  throw new Error("unable to connect to database:"+mongoConfig.db);
  });



  app.use(bodyParser.json());
  //initialize routes
  app.use('/api',require('./routes/api'));

  //error handlers
  app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
  })

    //listen for requests

  app.listen(process.env.PORT||4000,function(){
      console.log("Server up and running.........ready to accept requests  ");
  });
