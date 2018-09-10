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
var ChatPost = require('./chatPost');
var ChatStatus = require('./chatStatus');
var options = {discriminatorKey: '_class'};
var Chat = FlynSiteEntity.discriminator('Chat',new Schema({
  topic: String,
  description: String,
  posts: [{ type: Schema.Types.ObjectId, ref: 'ChatPost' }],
  status: { type: Schema.Types.ObjectId, ref: 'ChatStatus' },
  opened: Date,
  closed: Date
},options));

module.exports = Chat;
