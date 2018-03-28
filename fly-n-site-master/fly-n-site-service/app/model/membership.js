//app/models/Membership

/*
* (C)  Copyright 2015,  Dali Analytics, LLC.  
 * All rights reserved 
*/

/**
* Generated On: 2017-8-15
* Class: Membership
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');
var Person = require('./person');
var Club = require('./club');
var options = {discriminatorKey: '_class'};
var Membership = FlynSiteEntity.discriminator('Membership',new Schema({
    joined: Date,
    renewal: Date,
    person: { type: Schema.Types.ObjectId, ref: 'Person' },
    club: { type: Schema.Types.ObjectId, ref: 'Club' },
    membershipId: String
},options));

module.exports = Membership;
