//app/models/MapMarker

/*
* (C)  Copyright 2017, FlyNSite
 * All rights reserved
*/

/**
* Generated On: 2017-8-15
* Class: Regulation
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');
var options = {discriminatorKey: '_class'};
var Regulation = FlynSiteEntity.discriminator('Regulation',new Schema({
 	text: String,
 	status: {type: Schema.Types.ObjectId, ref: 'regulationStatus'}
},options));

module.exports = Regulation;
