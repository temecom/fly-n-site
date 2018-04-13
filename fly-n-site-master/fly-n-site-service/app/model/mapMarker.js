//app/models/MapMarker

/*
* (C)  Copyright 2017, FlyNSite 
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: MapMarker
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');
var options = {discriminatorKey: '_class'};
var MapMarker = FlynSiteEntity.discriminator('MapMarker',new Schema({
 	 description: String, 
     latitude: Number,
     longitude: Number
},options));

module.exports = MapMarker;
