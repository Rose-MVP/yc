var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/xscms";

function getStudents(callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            // console.log(result);
            callback(result)  // 把数据交给控制器
            db.close();
        });
    });
}

exports.getStudents = getStudents;