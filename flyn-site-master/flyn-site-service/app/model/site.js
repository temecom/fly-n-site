//app/models/site

/*
* (C)  Copyright 2017,  FlyNSite  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Site
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');

var Site = FlynSiteEntity.discriminator('Site',new Schema({

    description: String,
    location: {type: Schema.Types.ObjectId, ref: 'location'}

}, FlynSiteEntity.options));

module.exports = Site;
