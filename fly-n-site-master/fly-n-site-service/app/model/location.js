//app/models/Location

/*
* (C)  Copyright 2017, FlyNSite 
 * All rights reserved 
*/
/**
* Generated On: 2017-8-15
* Class: Location
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');
var options = {discriminatorKey: '_class'};
var Location = FlynSiteEntity.discriminator('Location',new Schema({
     latitude: Number, 
     longitude: Number
},options));

module.exports = Location;
