function readVilles(req, res) {

    let Ville = require("../models/ville");

    Ville.find({})
    .then((villes) => {
        res.status(200).json(villes);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readVille(req, res) {

    let Ville = require("../models/ville");

    Ville.findById({_id : req.params.id})
    .then((ville) => {
        res.status(200).json(ville);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.reads = readVilles;
module.exports.read = readVille;


