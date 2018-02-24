//app/models/Country

/*
* (C)  Copyright 2015,  Dali Analytics, LLC.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Country
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');
var options = {discriminatorKey: '_class'};
var Country = FlynSiteEntity.discriminator('Country',new Schema({
    name: String,
    code: String, 
    
},options));

module.exports = Country;
