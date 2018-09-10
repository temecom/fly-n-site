//app/models/Country

/*
* (C)  Copyright 2017, FlyNSite
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
var ChatPostStatus = FlynSiteEntity.discriminator('ChatPostStatus',new Schema({
     name: String,
     translationKey: String
},options));
module.exports = ChatPostStatus;
