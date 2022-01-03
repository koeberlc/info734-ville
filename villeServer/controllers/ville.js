function createVille(req, res) {
    let Ville = require('../models/ville');
    let newVille = Ville ({
        nom: req.body.nom,
        cp : req.body.cp,
    });
  
    newVille.save()
    .then((savedVille) => {

        //send back the created Ville
        res.json(savedVille);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

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

function updateVille(req, res) {

    let Ville = require("../models/ville");

    Ville.findByIdAndUpdate({_id: req.params.id}, 
        {nom : req.body.nom, 
        cp : req.body.cp})
    .then((updatedVille) => {
        res.status(200).json(updatedVille);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteVille(req, res) {

    let Ville = require("../models/ville");

    Ville.findOneAndRemove({_id : req.params.id})
    .then((deletedVille) => {
        res.status(200).json(deletedVille);
    }, (err) => {
        res.status(500).json(err);
    });
 }



module.exports.create = createVille;
module.exports.reads = readVilles;
module.exports.read = readVille;
module.exports.delete = deleteVille;
module.exports.update = updateVille;

