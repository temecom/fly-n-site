//app/models/Person

/*
* (C)  Copyright 2017, FlyNSite
 * All rights reserved
*/

/**
* Generated On: 2017-8-15
* Class: Person
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FlynSiteEntity = require('./flynSiteEntity');
var options = {discriminatorKey: '_class'};
var Person = FlynSiteEntity.discriminator('Person',new Schema({
    surName: String,
    givenName: String,
    birthDate: Date,
  //  contactMethods: [{type: Schema.Types.ObjectId, ref: 'ContactMethod'}],
    memberships: [{type: Schema.Types.ObjectId, ref: 'Membership'}]
},options));

module.exports = Person;
