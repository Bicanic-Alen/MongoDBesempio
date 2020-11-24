var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb
const uri = 'mongodb+srv://alen_bicanic:KPgZbP7MWt061Quk@cluster1.8ojbw.mongodb.net/Cluster1?retryWrites=true&w=majority'

/* GET users listing. */
router.get('/actors/:act', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    act = req.params.act;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundTitle);
        
        function foundTitle(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("sample_mflix").collection("movies");
                collection.find({cast:{$in : [`${act}`]}}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
}); 

router.get('/length_year/:length/:year', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    let l = parseInt(req.params.length);
    let y = parseInt(req.params.year);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundTitle);
        
        function foundTitle(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("sample_mflix").collection("movies");
                collection.find({$and:[{runtime:l},{year:y}]}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
}); 

module.exports = router;
