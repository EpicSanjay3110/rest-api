const mongoose = require('mongoose');
const Schema = mongoose.Schema;


 //create ninja schema and model

 const ninja = Schema({
   _id: false,
   name: {
     type: String,
     required: [true,'Name is required']
   },
   rank:{
     type:String,
   },
   available:{
     type:Boolean,
     default:false
   }
 });

 const Ninja =mongoose.model('ninja',ninja);


 module.exports=Ninja;
