//app/models/Club

/*
* (C)  Copyright 2017,  FlyNSite  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: PostalAddress
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');
var options = {discriminatorKey: '_class'};
var PostalAddress = FlynSiteEntity.discriminator('PostalAddress',new Schema({
	street: String,
    city: String,
    region: { type: Schema.Types.ObjectId, ref: 'Region' },
    postalcode: String,
    county: { type: Schema.Types.ObjectId, ref: 'Country' },
},options));

module.exports = PostalAddress;
