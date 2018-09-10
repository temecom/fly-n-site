//app/models/Membership

/*
* (C)  Copyright 2017, FlyNSite
 * All rights reserved
*/

/**
* Generated On: 2017-8-15
* Class: Membership
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');
var ChatStatus = require('./chatPostStatus');
var options = {discriminatorKey: '_class'};
var Chatpost = FlynSiteEntity.discriminator('Chatpost',new Schema({
  text: String,
  description: String,
  status: { type: Schema.Types.ObjectId, ref: 'ChatPostStatus' },
  posted: Date,
  postedBy: { type: Schema.Types.ObjectId, ref: 'Person' }
},options));

module.exports = Chatpost;
