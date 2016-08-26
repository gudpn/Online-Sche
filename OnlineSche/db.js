// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/sche", function (err, db) {
    if (err) { return console.dir(err); }
    
    var collection = db.collection('event');
    var doc1 = {
        title: 'Meeting',
        start: '2016-06-12T10:30:00',
        url: 'http://google.com/',
        end: '2016-06-12T12:30:00'
    };
    
    var doc2 = { 'hello': 'doc2' };
    var lotsOfDocs = [{ 'hello': 'doc3' }, { 'hello': 'doc4' }];
    
    

    
    collection.insert(doc1);
    
    collection.insert(doc2, { w: 1 }, function (err, result) { });
    
    collection.insert(lotsOfDocs, { w: 1 }, function (err, result) { });

});