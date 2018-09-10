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
var RegulationStatus = FlynSiteEntity.discriminator('RegulationStatus',new Schema({
},options));

module.exports = RegulationStatus;
