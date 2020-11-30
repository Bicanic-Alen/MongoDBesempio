var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

const uri = 'mongodb+srv://alen_bicanic:KPgZbP7MWt061Quk@cluster1.8ojbw.mongodb.net/Cluster1?retryWrites=true&w=majority'

/* GET users listing. */
router.get('/movie_from_title/:title', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    title = req.params.title;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundTitle);
        
        function foundTitle(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("sample_mflix").collection("movies");
                collection.find({ 'title': `${title}` }).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
}); 

router.get('/list/:num', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    let num = parseInt(req.params.num);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundList);
        
        function foundList(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("sample_mflix").collection("movies");
                collection.find().limit(num).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
}); 

router.get('/year/:num', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    let num = parseInt(req.params.num);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundYear);
        
        function foundYear(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("sample_mflix").collection("movies");
                collection.find({year:num}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
});

router.get('/rating/:num', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    let num = parseInt(req.params.num);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundRating);
        
        function foundRating(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("sample_mflix").collection("movies");
                collection.find({'imdb.rating': num}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
});


module.exports = router;