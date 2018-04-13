//app/models/site

/*
* (C)  Copyright 2017,  FlyNSite  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Map
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');

var Map = FlynSiteEntity.discriminator('Map',new Schema({
	zoomLevel: Number, 
    description: String,
    markers: [{type: Schema.Types.ObjectId, ref: 'MapMarker'}]

}, FlynSiteEntity.options));

module.exports = Map;
