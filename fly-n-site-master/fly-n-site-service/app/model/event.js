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
var Event = FlynSiteEntity.discriminator('Event',new Schema({
	startDateAndTime: Date,
	endDateAndTime: Date,
	location: {type: Schema.Types.ObjectId, ref: 'Location'}
},options));

module.exports = Event;
