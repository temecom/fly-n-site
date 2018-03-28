//app/models/Person

/*
* (C)  Copyright 2015,  Dali Analytics, LLC.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Person
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');
var options = {discriminatorKey: '_class'};
var Person = FlynSiteEntity.discriminator('Person',new Schema({
    surName: String,
    givenName: String
},options));

module.exports = Person;
