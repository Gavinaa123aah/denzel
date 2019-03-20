var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost";


app.get('/movies', function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("denze");
    dbo.collection("movies"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
    });
});
});

app.get('/movie/:id', function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("denze");
    console.log(req.params.id)
    var whereStr = {"id":req.params.id}; 
    dbo.collection("movies"). find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
    });
});
  
 });
 

 app.get('^/movies/search', function (req, res) {
   console.log(req.query.limit);
   console.log(req.query.metascore);
   var score = parseInt(req.query.metascore)
   var count = parseInt(req.query.limit)
   MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("denze");
    var whereStr = {"metascore":{$gt: score}}; 
    dbo.collection("movies"). find(whereStr).limit(count).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
    });
  });
 });

 app.post('/movies/:id', function (req, res) {
   res.send('post new movie');
 });
 
 
var server = app.listen(9292, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})