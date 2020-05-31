// ---------- 创建数据库 如果里面没有集合  数据库是不显示的
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/xscms";
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   db.close();
// });

// ---------- 创建数据库 并插入一个集合
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/xscms';
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//     if (err) throw err;
//     console.log('数据库已创建');
//     var dbase = db.db("xscms");
//     dbase.createCollection('site', function (err, res) {
//         if (err) throw err;
//         console.log("创建集合!");
//         db.close();
//     });
// });

// ---------- 插入一条数据
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/xscms";
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("xscms");
//     var myobj = { name: "wangcai", age: "18" };
//     dbo.collection("site").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });

// ----------------------- 插入多条数据  
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/xscms";
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("xscms");
//     var myobj =  [
//         { name: 'z3', age: '1'},
//         { name: 'w5', age: '2'},
//         { name: '666', age: '3'}
//        ];
//     dbo.collection("site").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });


// --------------- 查询数据
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/xscms";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("xscms");
    dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });
});













