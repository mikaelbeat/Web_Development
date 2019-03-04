//jshint esversion:6

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

app.listen(3000, function(){
  console.log("Server started on port 3000");
});

// REQUEST FOR SPECIFIC ARTICLE

app.route("/articles/:articleTitle").get(function(req, res){

  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
    if (foundArticle){
      res.send(foundArticle);
    } else {
      res.send("No articles found about " + req.params.articleTitle + ".");
    }
  });
})

.put(function(req, res){
  Article.update({title: req.params.articleTitle},
                 {title: req.body.title, content: req.body.content},
                 {overwrite: true},
                 function(err, result){
                   if (!err) {
                     res.send("Successfully updated article on " + req.params.articleTitle + ".");
                   } else {
                     res.send("Error updating article on " + req.params.articleTitle + ". Error: " + err);
                   }

  });
})

.patch(function(req, res){
  Article.update({title: req.params.articleTitle},
                 {$set: req.body}, function(err){
                   if (!err){
                     res.send("Successfully updated article on " + req.params.articleTitle + ".");
                   } else {
                     res.send("Error updating article on " + req.params.articleTitle + ". Error: " + err);
                   }
    });
})

.delete(function(req, res){
  Article.deleteOne({title: req.params.articleTitle}, function(err){
    if (!err){
      res.send("Successfully deleted article on " + req.params.articleTitle + ".");
    } else {
      res.send("Error deleting article about " + req.params.articleTitle + ". Error: " + err);
    }
  });
});

// REQUESTS FOR ALL ARTICLES

app.route("/articles")
  .get(function(req, res){
    Article.find({}, function(err, foundArticles){
      if (!err){
        res.send(foundArticles);
        console.log("Found articles: " + foundArticles);
      } else {
        console.log("No articles found on " + err);
      }
    });
  })

  .post(function(req, res){
    const newArticle = new Article({
      title:req.body.title,
      content: req.body.content
    });
    newArticle.save(function(err){
      if (!err){
        res.send("Successfully added a new article.");
      } else {
        res.send("Error: " + err);
      }
    });
  })

  .delete(function(req, res){
    Article.deleteMany({}, function(err){
      if (!err){
        res.send("Successfully deleted all articles.");
      } else {
        res.send("Error: " + err);
      }
    });
  });
