var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SavedArticlesSchema = new Schema({
  title: {
    type: String
  },
  url:{
  	type: String
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }, 
  date:{
  	type: Date
  }
});

var SavedArticles = mongoose.model("SavedArticles", SavedArticlesSchema);
module.exports = SavedArticles;