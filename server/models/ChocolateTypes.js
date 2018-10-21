const mongoose = require('mongoose')
// import autoref from 'mongoose-autorefs'
const { ObjectID } = mongoose.Scheme.Types;

/*
USER SCHEMA:
*/
const Schema = new mongoose.Schema({
  chocolateType: { type: String, enum: ['White', 'Milk', 'Dark', 'Dark Milk'] }
});
  
  const Model = mongoose.model('User', Schema)
  
  module.exports = Model
  