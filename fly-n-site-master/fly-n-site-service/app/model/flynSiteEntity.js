//app/model/fly-n-site-entity

/*
* (C)  Copyright 2017,  FlyNSite  
 * All rights reserved 
*/
/**
* Generated On: 2017-8-15
* Class: FlynSiteEntity
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var options = {discriminatorKey: '_class'};
var FlynSiteEntitySchema = new Schema({

    _id: String,
    name: String,
    updateTime: Date

}, options);

module.exports = mongoose.model('FlynSiteEntity', FlynSiteEntitySchema);
