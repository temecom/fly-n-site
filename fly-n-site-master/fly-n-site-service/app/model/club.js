//app/models/Club

/*
* (C)  Copyright 2017, FlyNSite 
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Club
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');
var options = {discriminatorKey: '_class'};
var Club = FlynSiteEntity.discriminator('Club',new Schema({
    emailAddress: String,
    webSiteUrl: String,
    facebookPage: String
},options));

module.exports = Club;
