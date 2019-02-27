//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Error, no name specified!"]},
  rating: {
      type: Number,
      min: 1,
      max: 10
    },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
//  name: "Lemon",
  rating: 7,
  review: "Kind a sour"
});

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const karambola = new Fruit({
  name: "Karambola",
  score: 10,
  review: "Best of the best"
});

  //karambola.save();



// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

// person.save();

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log("Fuits name -> " + fruit.name);
    });
  }
});

Person.updateOne({_id: "5c6ffb9e484c1f1cd478a999"}, {favouriteFruit: karambola}, function(err){
  if (err) {
    console.log("Error -> " + err);
  } else {
    console.log("One record deleted");
  }
});






const insertDocuments = function(db, callback){

  // Get the documetns collection
  const collection = db.collection("fruits");

  // Insert some documents
  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Kinda sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Great stuff!"
  }
  ], function(err, result){
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Insert 3 documents into the collection");
    callback(result);
  });

};

const findDocuments = function(db, callback){

  // Get the document collection
  const collection = db.collection("fruits");

  // Find some documents
  collection.find({}).toArray(function(err, fruits){
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
};
