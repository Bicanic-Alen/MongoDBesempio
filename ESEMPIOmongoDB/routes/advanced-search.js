var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

/* GET users listing. */
router.get('/actors/:act', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    act = req.params.act;
    const uri = 'mongodb+srv://alen_bicanic:KPgZbP7MWt061Quk@cluster1.8ojbw.mongodb.net/Cluster1?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({cast:{$in : [`${act}`]}}).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});
router.get('/length_year/:length/:year', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    let l = parseInt(req.params.length);
    let y = parseInt(req.params.year);
    const uri = 'mongodb+srv://alen_bicanic:KPgZbP7MWt061Quk@cluster1.8ojbw.mongodb.net/Cluster1?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({$and:[{runtime:l},{year:y}]}).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});
module.exports = router;
