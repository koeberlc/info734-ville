var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VilleSchema = new Schema({
  nom : String,
  cp : String
});

module.exports = mongoose.model('Ville', VilleSchema);
