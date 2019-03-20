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


 

 app.post('/movies/search', function (req, res) {
   res.send('movies search');
 });

 app.post('/movies/:id', function (req, res) {
   res.send('post new movie');
 });
 
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})