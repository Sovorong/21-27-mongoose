const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://sovorong:090909@sovorong.yf67k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect (() => {
  console.log("몽고접근성공")
}, (err) => {
  console.log("몽고설정실패")
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
